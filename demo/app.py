from pathlib import Path

import gradio as gr
from gradio_joboverview import JobItem, JobOverview

example: list[JobItem] = JobOverview().example_inputs()

with gr.Blocks() as demo:
    view1 = JobOverview(example)
    view2 = JobOverview()

    @demo.load(outputs=[view2])
    def on_load():
        return example


demo.launch(allowed_paths=["."])
