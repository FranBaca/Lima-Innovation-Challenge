import React from 'react'
import User from "../Posts/User/User"
import Comments from "../Comments/Comments"
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {filterTags} from "../../actions/index"
import styles from "./Posts.module.css"
export default function Posts(props) {

    
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false)
  function openModal() {
    setIsOpen(true);
   
  }

  function closeModal(){
    setIsOpen(false);
  }

  function openModal2() {
    setIsOpen2(true);
   
  }

  function closeModal2(){
    setIsOpen2(false);
  }

  const dispatch = useDispatch()

  function filteredTags(e){
      dispatch(filterTags(e))
  }

  const tags = useSelector(state => state.tag)
  console.log(tags)

  

  if (tags.length !== 0 && !props.posts.tags.includes(tags)) {
    return (
        <div>
        </div>
    )
}

        
   

   
    return (
        <div className={styles.postsCards} >
             <div className={styles.userCard} >
    
               <button style={{border:"none", backgroundColor:"transparent"}} onClick={openModal}> 
               <img className={styles.users} src={props.posts.owner.picture} alt="user not found"/>
                <p>{props.posts.owner.firstName} {props.posts.owner.lastName}</p>
                </button>

                
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"> 
                    <User id={props.posts.owner.id} />

                    </Modal>

                    <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal2}
                    style={customStyles}
                    contentLabel="Example Modal"> 
                   <Comments id={props.posts.id} />

                    </Modal>
                    
               

                
            </div>
            <div className={styles.infoPost}>
                <img className={styles.imagesPosts} src={props.posts.image} alt="POST IMG NOT FOUND" />
                <h6 className={styles.text}>{props.posts.text}</h6>
                {props.posts.tags.map(e =>{
                    return <button style={{border:"none", backgroundColor:"#143F46", cursor:"pointer", color:"#ffff", borderRadius:"20px", justifyContent:"spaceEvenly"}} onClick={()=>filteredTags(e)}>#{e}</button>
                })}
               
                <p className={styles.text}>Published Date: {props.posts.publishDate}</p>
                <a className={styles.link} href={props.posts.link}>Link</a>
                <p className={styles.text}>Likes: {props.posts.likes}</p>
                <button style={{border:"none", backgroundColor:"transparent", cursor:"pointer"}} onClick={openModal2}> 
                Comments
                </button>
            </div>
            
           
        </div>
    )
}


