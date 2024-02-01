import { type FileData } from "@gradio/client";

export type JobItem = {
    files: FileData[] | null
};

export type JobData = JobItem[];
