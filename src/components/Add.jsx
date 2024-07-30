import React from 'react';

const Add = () => {
    return (
        <div className="container mt-4">
            
            <form>
                <div className="mb-3">
                    <label className="form-label"> OWNER NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> PHONE NUMBER</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">OWNER ADDRESS</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">PINCODE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">BUS REGISTRATION</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">BUS PURCHASE DATE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">INSURANCE DOCUMENT </label>
                    <input type="email" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
            </form>
        </div>
    );
};

export default Add;
