import React from 'react';

const Delete = () => {
    return (
        <div className="container mt-4">
         
            <form>
                <div className="mb-3">
                    <label className="form-label">BUS NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">BUS REGISTRATION NO</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">DELETE</button>
            </form>
        </div>
    );
};

export default Delete;
