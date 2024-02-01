from __future__ import annotations

from pathlib import Path
from typing import Callable

from gradio.components.base import Component
from gradio.data_classes import FileData, GradioModel, GradioRootModel


class JobItem(GradioModel):
    files: list[str | Path | FileData] | None = None


class JobData(GradioRootModel):
    root: list[JobItem]


class JobOverview(Component):
    """
    Stripped down job overview component for debugging purposes.
    Preprocessing: none.
    Postprocessing: expects a list of `JobItem` objects.
    """

    EVENTS = []

    data_model = JobData

    def __init__(
        self,
        value: list[JobItem] | Callable | None = None,
        *,
        every: float | None = None,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
    ):
        """
        Parameters:
            value: list of `JobItem` objects to be displayed.
            every: if `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            visible: if False, component will be hidden.
            elem_id: an optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: an optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: if False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
        """
        super().__init__(
            every=every,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            value=value,
            render=render,
        )

    def preprocess(self, payload: JobData | None) -> None:
        return None

    def postprocess(self, value: list[JobItem] | None) -> JobData:
        if not value:
            return JobData(root=[])
        return JobData(root=[
            JobItem(files=[
                self._to_file_data(f)
                for f in item.files
            ]
            if item.files else None)
            for item in value
        ])

    def _to_file_data(self, f: str | Path | FileData) -> FileData:
        if isinstance(f, str):
            f = Path(f)
        if isinstance(f, Path):
            f = FileData(path=str(f), orig_name=f.name, size=f.stat().st_size)
        return f

    def example_inputs(self) -> list[JobItem]:
        return [JobItem(files=["README.md"])]
