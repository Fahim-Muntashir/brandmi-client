/* eslint-disable @typescript-eslint/no-explicit-any */
import { demoGigData } from '@/defaultValues/gigDefault.type';
import { GigFormData } from '@/types/dataType/gigFormdata.type';
import { create } from 'zustand'

export type TabType = 'overview' | 'pricing' | 'description' | 'gallery';
interface GigFormStore {
    currentTab: TabType;
    formData: GigFormData;
    getProgress: () => number;
    setCurrentTab: (tab: TabType) => void;
    updateFormData: (tab: keyof GigFormData, data: Partial<GigFormData[keyof GigFormData]>) => void
}


export const gigFormState = create<GigFormStore>((set, get) => ({
    currentTab: "overview",
    formData: demoGigData,
    // Function to calculate progress based on the current tab
    getProgress: () => {
        const steps: Record<TabType, number> = {
            overview: 25,
            pricing: 50,
            description: 75,
            gallery: 100,
        };
        return steps[get().currentTab];
    },
    // Function to set the current tab
    setCurrentTab: (tab) => set({ currentTab: tab }),

    // Function to update the form data
    updateFormData: (tab: keyof GigFormData, data: any) => {
        set((state) => ({
            formData: {
                ...state.formData,
                [tab]:
                {
                    ...(state.formData[tab] as object || {}), // Merge for objects
                    ...data,
                },
            },
        }));
    },




}))
