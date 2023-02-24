"use client"

import * as React from 'react';

export default function UploadButtons() {

    return (
        <>
        <form method="post" encType="multipart/form-data" onSubmit={event => console.log(event)} >
            <input   multiple type="file" onChange={event => console.log(event)}/>

                    <button type={"submit"} title={"Up"}>up</button>
                </form>
        </>
);
}