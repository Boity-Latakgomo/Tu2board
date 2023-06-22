
import React, {useState} from 'react'
import styles from './postContent.module.css'
import ReactMarkdown from 'react-markdown'
import { Textarea, Button } from '@mantine/core'
import { RichTextEditor } from '@mantine/rte'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AttachmentAdder, PositiveButton, PostEntryPicker} from '../../components'

const TestData = ["SCOA021", "SMTH021", "SSTB021"];

const PostContent = () => {

  const [editorState, setEditorState] = useState('');

  const handleEditorChange = (content: any, delta: any, source: any, editor: any) => {
    console.log("content: ",content); // content
    setEditorState(content);
  };

  return (
    <div className={styles.container}>
      <p className={styles.headerText}>Create a new question</p>
      <div className={styles.titleCover}>
        <div className={styles.titleTextContainer}>
          <p>Title</p>
        </div>
        <div className={`${styles.titleContainer} bgcolor__light-theme`}>
          <input type='text' className={styles.titleInput} placeholder='Enter your title here' />
        </div>
      </div>

      <div className={styles.bodyCover}>
        <div className={styles.bodyTextContainer}>
          <p>Body</p>
        </div>
        <div className={`${styles.bodyContainer} bgcolor__light-theme`}>
          <ReactQuill className={styles.bodyInput} theme="snow" value={editorState} onChange={handleEditorChange} />
        </div>
      </div>
      <AttachmentAdder />
      <div className={styles.courseSubmitBtnContainer}>
        <PostEntryPicker data={TestData} onChange={() => {}} placeholderText='Select module'/>
        <div className={styles.divider}/>
        <PositiveButton onclick={() => {}}/>
      </div>
    </div>
  );

}

export default PostContent