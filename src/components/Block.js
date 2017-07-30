import React, { PropTypes, Component } from 'react'
import styles from './Block.css'


export default class Block extends Component {
  render() {
    const { person, personal, post, setEditPerson } = this.props
    const id = person.id
    const image = person.image
    const birth_date = person.birth_date
    const first_name = person.first_name
    const last_name = person.last_name
    return (
  		<div className={styles.block_container}>
        <div className={styles.image_div}>
          <img className={styles.image} src={image} />
        </div>
        <div className={styles.flex_item}>
      		<p className={styles.name}>{first_name} {last_name}</p>
          <div className={styles.flex_item}>
        		<p className={styles.post}>{post}</p>
      		</div>
    		</div>
        <div className={styles.button_div}>
      		<button
            className={styles.button_edit}
            onClick={() => setEditPerson(personal.index[id])}
          >Редактировать</button>
    		</div>
  		</div>
  	)
  }
}
