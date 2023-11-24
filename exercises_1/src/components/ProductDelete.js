import {removeProduct} from "../service/ProductService";
import {toast} from "react-toastify";
import React from "react";

export function ProductDelete(props) {
    const {isModalShow, closeModal, selectedProduct} = props
    const handleDelete = async (product) => {
        const rs = await removeProduct(product.id);
        if (rs.status === 200) {
            closeModal();
            toast("Delete Success")
        }
    }
    return (
        isModalShow && (
            <>
                <div className="modal" tabIndex="-1" style={{display: "block"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want delete : <b>{selectedProduct.nameProduct}</b>.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={closeModal}>Close
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleDelete(selectedProduct)}>Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    )
}