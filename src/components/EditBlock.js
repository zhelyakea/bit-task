import React, { PropTypes, Component } from 'react'
import styles from './EditBlock.css'
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';



export default class EditBlock extends Component {
  constructor(props){
    super(props)
    const { person, post } = this.props
    this.state = {
      id: person.id,
      first_name: person.first_name,
      last_name: person.last_name,
      post: post,
      birth_date: person.birth_date,
      description: person.description
    }
  }
  componentWillReceiveProps(nextProps){
    const { person, post } = nextProps
      this.setState ({
        id: person.id,
        first_name: person.first_name,
        last_name: person.last_name,
        post: post,
        birth_date: person.birth_date,
        description: person.description
      })
    }
  changeLastName(event){
    this.setState({
      last_name: event.target.value
    })
  }
  changeDate(date) {
    this.setState({
      birth_date: date
    });
  }
  changeFirstName(event){
    this.setState({
      first_name: event.target.value
    })
  }
  changeDescription(event){
    this.setState({
      first_description: event.target.value
    })
  }
  logChange(arg) {
    this.setState({
      post: arg.id
    })
  }
  changeBirthDate(event){
    console.log(event.target.value)
    this.setState({
      birth_date: `${event.target.value}T${this.state.birth_date.split('T')[1]}`
    })
  }
  render() {
    const { person, personal, edit, posts, changePersonalData, deleteAndChangeEdit } = this.props

    const personal_list = personal.personal
    const personal_index = personal.index

    const posts_list = posts.posts
    const posts_index = posts.index

    const id = person.id
    const image = person.image
    const options = []

    posts_list.forEach((key, index) => {
      options[index] = {}
      options[index].value = posts_list[index].name
      options[index].label = posts_list[index].name
      options[index].id = posts_list[index].id
    })

    const dataToSaveChanges = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      post: this.state.post,
      birth_date: this.state.birth_date,
      description: this.state.description
    }
    const toSaveChanges = {
      index: edit,
      data: dataToSaveChanges,
    }
    return (
      <div className={styles.col_container}>

      <div className={styles.row_container}>

          <div className={styles.image_div}>
            <img className={styles.image} src={image} />
          </div>

          <div className={styles.data_input_container}>

          <input className={styles.data_input}
              onChange={::this.changeLastName}
              value={this.state.last_name} />

              <input className={styles.data_input}
              onChange={::this.changeFirstName}
              value={this.state.first_name} />

              <input type="date" className={styles.data_input}
              value={this.state.birth_date.split('T')[0]}
              onChange={::this.changeBirthDate} />


            <div className={styles.flex_item}>
              <Select className={styles.data_input}
                name="form-field-name"
                value={posts_list[posts_index[this.state.post]].name}
                options={options}
                onChange={::this.logChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.textarea_div}>
          <textarea
            onChange={::this.changeDescription}
            className={styles.textarea} value={this.state.description} />
        </div>

        <div className={styles.bottom_button_div}>
          <button
            className={styles.button_save}
            onClick={() => changePersonalData(toSaveChanges)}
          >Сохранить</button>

          <button
            className={styles.button_delete}
            onClick={() => deleteAndChangeEdit(edit)}
          >Удалить</button>
        </div>
      </div>
    )
  }
}
