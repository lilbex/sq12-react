import swal from "sweetalert";
import { toast } from "react-toastify";

export default function useDialog() {
  const deleteItem = (handleDelete, id, name) => {
    swal({
      title: "Are you sure",
      text: `You want to delete ${name}`,
      icon: "warning",
      buttons: {
        none: {
          text: "cancel",
          className: "cancel",
          value: null,
        },
        confirm: {
          text: `delete`,
          value: true,
          closeModal: false,
          className: "confirm",
        },
      },
    }).then((value) => {
      if (value) {
        handleDelete(id)
          .then(() => {
            swal.stopLoading();
            swal.close();
            toast.success("Deleted successfully");
          })
          .catch((err) => {
            swal.stopLoading();
            swal.close();
            toast.error(err?.response?.data?.message || `Could not delete`);
          });
      } else {
        swal.stopLoading();
        swal.close();
      }
    });
  };
  return {
    deleteItem,
  };
}
