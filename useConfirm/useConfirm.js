export const useConfirm = (message = "", onCofirm, onCancel) => {
  if (!onCofirm || typeof onCofirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onCofirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};
