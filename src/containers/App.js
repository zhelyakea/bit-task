import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Block from '../components/Block'
import EditBlock from '../components/EditBlock'
import * as dataAction from '../actions/DataAction'
import * as actions from '../actions'
import styles from './App.css'
const { map, reduce } = Array.prototype

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search_text: ''
    }
  }
	componentDidMount(){
		const { personal_fetch } = this.props.dataAction
		personal_fetch('posts')
	}
	searchPerson(event){
    if (event.key === 'Enter') {
  		const { personalSearch } = this.props.dataAction
  		personalSearch(this.state.search_text)
    }
	}
  enterSearchQuery(event) {
    this.setState({
      search_text: event.target.value
    })
  }
	render() {
		const { personal, posts, edit } = this.props

		const personal_list = personal.personal
		const personal_index = personal.index
		const personal_search_index = personal.search_index
		const posts_list = posts.posts
		const posts_index = posts.index

	 	const { setEditPerson,
			changePersonalData,
			deleteAndChangeEdit,
      sortByDate } = this.props.actions

    const propsToEditPerson = personal_list.length ? {
			changePersonalData,
			deleteAndChangeEdit,
			person: personal_list[edit],
			post: personal_list[edit].post,
			posts,
			edit,
			personal
		} : null

		const editblock = personal_list.length ? <EditBlock {...propsToEditPerson} /> : null
    const search_condition = Object.keys(personal_search_index).length && this.state.search_text.length ? true : false

    const list_string = search_condition ? {...personal_search_index} : {...personal_index}

		const container = personal_list::map((key, index) => {
      const person = personal_list[index]
      if(search_condition && personal_search_index.hasOwnProperty(person.id) || !search_condition){
        return <Block key = { person.id }
          person = { person }
          post = { posts_list[posts_index[person.post]].name }
          setEditPerson = { setEditPerson }
          personal = { personal }
        />
      }
    })
		return (
			<div className={styles.col_container}>
				<div className={styles.block_container}>
					{editblock}
				</div>

				<div className={styles.search_date_div}>
					<input className={styles.search_input}
						placeholder="Поиск"
						onChange={::this.enterSearchQuery}
						onKeyPress={::this.searchPerson}
						value={this.state.search_text} />

          <button
          className={styles.date_button}
          onClick={() => sortByDate()}>По возрасту</button>
				</div>

				<div className={styles.scroll}>
					{container}
				</div>
			</div>
		)
	}
}
App.propTypes = {
  personal: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  edit: PropTypes.string.isRequired
}
function mapStateToProps (state) {
	return {
		personal: state.personal,
		posts: state.posts,
		edit: state.edit,
	}
}
function mapDispatchToProps(dispatch) {
  return {
    dataAction: bindActionCreators(dataAction, dispatch),
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
