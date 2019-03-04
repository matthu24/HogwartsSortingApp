import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: 0,
      shuffled: false
    }

    this.handleChange = this.handleChange.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(e, { value }) {
    this.props.addPts(value, 4)
    this.setState({ selectedAnswer: value })
  }

  render() {
    const { question_text } = this.props;
    const { sly, rav, huf, gry, orders } = this.props;
    let order = JSON.parse(orders)
    let questions = [['0', gry],['1', rav],['2', sly],['3', huf]]
    return (
      <div>
        <Header>
          Question: {question_text}
        </Header>

        <Form>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[0]][1]}
              name='radioGroup'
              value={questions[order[0]][0]}
              checked={this.state.selectedAnswer === questions[order[0]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[1]][1]}
              name='radioGroup'
              value={questions[order[1]][0]}
              checked={this.state.selectedAnswer === questions[order[1]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[2]][1]}
              name='radioGroup'
              value={questions[order[2]][0]}
              checked={this.state.selectedAnswer === questions[order[2]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[3]][1]}
              name='radioGroup'
              value={questions[order[3]][0]}
              checked={this.state.selectedAnswer === questions[order[3]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default QuestionForm;
