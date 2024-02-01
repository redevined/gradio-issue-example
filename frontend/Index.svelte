<svelte:options accessors={true} />

<script context="module" lang="ts">
	export { default as BaseJobOverview } from "./shared/JobOverview.svelte";
</script>

<script lang="ts">
	import JobOverview from "./shared/JobOverview.svelte";
	import { type JobData } from "./shared/types";
	import type { Gradio } from "@gradio/utils";
	import { Block } from "@gradio/atoms";
	import { normalise_file } from "@gradio/client";
	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";

	export let gradio: Gradio<{}>;
	export let elem_id: string;
	export let elem_classes: string[];
	export let visible = true;
	export let value: JobData | null = null;
	export let loading_status: LoadingStatus | undefined = undefined;
	export let root: string;
	export let proxy_url: null | string;

	$: if (value != null && value.length > 0) {
		console.debug(value[0].files[0]);
	}
	let _value: JobData | null;
	$: _value = value?.map((item) => {
		return { ...item, files: normalise_file(item.files, root, proxy_url) };
	});
</script>

<Block {visible} {elem_id} {elem_classes}>
	{#if loading_status}
		<StatusTracker
			autoscroll={gradio.autoscroll}
			i18n={gradio.i18n}
			{...loading_status}
		/>
	{/if}

	<JobOverview value={_value} i18n={gradio.i18n} />
</Block>
