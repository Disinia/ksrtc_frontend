import React from 'react'

const View = () => {
    return (
        <div className="container mt-4">

            <form>
                <div className="mb-3">
                    <label className="form-label">ROUTE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">DISTRICT</label>
                    <input type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">VIEW</button>
            </form>
        </div>
    )
}

export default View