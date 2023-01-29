import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({
            token : [
                { token: "" }
            ],

        })
    )
)