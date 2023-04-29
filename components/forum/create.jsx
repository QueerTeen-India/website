import React from 'react';
import Head from "next/head";
import CancelIcon from '@mui/icons-material/Cancel';
import { Upload } from '@mui/icons-material';
const Uploader = (props) => {
    let [state, setState] = React.useState({
        data: null
    })
    const upload = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setState({ data: reader.result })
            props.upload(reader.result)
        }
    }
    const remove = () => {
        setState({ data: null })
        props.upload(null)
    }
    if (props.type === "image") {
        return (
            <div className="forum-create-upload">
                <input style={{ display: 'none' }} id="file" accept='image/*' type="file" onChange={upload} />
                {state.data ? <div className='forum-create-image'> <img src={state.data} alt="upload" /> <CancelIcon onClick={remove} className='forum-create-image-cancel' /> </div> : <label className='forum-create-upload-label' htmlFor='file'>
                    <Upload className='forum-create-upload-label-icon' />
                </label>}
            </div>
        )
    }
    else {
        return (
            <div className="forum-create-upload">
                <input style={{ display: 'none' }} accept='video/*' id="file" type="file" onChange={upload} />
                {state.data ? <div className='forum-create-image'> <video src={state.data} alt="upload" /> <CancelIcon onClick={remove} className='forum-create-image-cancel' /> </div> : <label className='forum-create-upload-label' htmlFor='file'>
                    <Upload className='forum-create-upload-label-icon' />   </label>}
            </div>
        )
    }

}
const Create = (props) => {
    let types = ["text", 'image', 'video']
    const [state, setState] = React.useState({
        title: '',
        content: '',
        type: types[0]
    });
    console.log(props)

    if (props.auth.loggedInStatus !== 1) {
        // document.location.href = '/'
        return <div></div>
    }
    return (
        <div className="forum-create">
            <Head>
                <title>Create a new post</title>
            </Head>
            <div className="forum-create-header">
                <h1>Create a Thread</h1>
                <p>Start a discussion with our community.</p>
            </div>

            <div className="forum-create-form">
                <div className="forum-create-form-input">
                    <input type="text" name="title" id="title" placeholder=" " />

                    <label htmlFor="title">Title</label>
                </div>
            </div>

            <div className='forum-create-type'>
                {types.map((type, index) => {
                    return (
                        <p className='forum-create-type-each' style={{
                            backgroundColor: state.type === type ? '#000' : '',
                        }} onClick={(e) => {
                            if (state.type !== type) {
                                setState(state => ({ ...state, content: '', type: type }))
                            }
                        }} key={'type-' + index}>
                            {type}
                        </p>
                    )
                })}
            </div>
            {state.type === 'text' ? <div className="forum-create-form">
                <div className="forum-create-form-input">
                    <textarea onChange={(e) => {

                        if (e.target.scrollHeight < 300) {
                            e.target.style.height = 0;
                            e.target.style.height = (e.target.scrollHeight) + "px"
                        }
                    }} name="content" id="content" placeholder="What do you have on your mind?" />
                </div>
            </div> : <Uploader type={state.type} upload={(data) => {
                setState(state => ({ ...state, content: data }))
            }} />}
            <button className="forum-create-button">
               <p> SUBMIT</p>
            </button>
        </div>
    )
}

export default Create;