import { create } from 'zustand';

interface MessageModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMessageModal = create<MessageModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useMessageModal;
