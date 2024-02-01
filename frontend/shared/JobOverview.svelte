<script lang="ts">
	import { Block, BlockLabel, Empty } from "@gradio/atoms";
	import { BaseFile } from "@gradio/file";
	import { Table } from "@gradio/icons";
	import { type I18nFormatter } from "@gradio/utils";
	import { type JobData } from "./types";

	export let value: JobData | null = null;
	export let i18n: I18nFormatter;
</script>

{#if value == null || value.length === 0}
	<BlockLabel Icon={Table} label="Job overview" />
	<Empty unpadded_box={true} size="small"><Table /></Empty>
{:else}
	{#each value as item, i}
		{#if item.files !== null && item.files.length > 0}
			<Block padding={false} allow_overflow={false}>
				<BaseFile value={item.files} label="Files" {i18n} />
			</Block>
		{/if}
	{/each}
{/if}
