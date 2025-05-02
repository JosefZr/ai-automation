import { create } from "zustand"

export const MODAL_TYPE = {
  FORM_MODAL: "fromModal",
};

export const useModal = create((set) => ({
  type: null,
  data: null,  // Add data field
  isOpen: false,
  onOpen: (type, data) => set({ isOpen: true, type, data }), // Accept data
  onClose: () => set({ isOpen: false, type: null, data: null }) // Reset data
}));