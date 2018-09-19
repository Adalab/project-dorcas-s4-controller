import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import LayoutPrincipal from "./components/LayoutPrincipal";
import { withRouter, Route, Switch } from "react-router-dom";
import { throws } from "assert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      email: "usuario",
      classError: "hidden",
      classErrorInputEmail: "form-input form-input--top",
      classErrorInputPassword: "form-input",
      inputE: "",
      inputP: "",
      establishments: [],
      selectedEstablishment: 1,
      detailsEstablishment: [],
      modalIsOpen: false,
      colorMenuButton1: 'buttonList buttonSelection',
      colorMenuButton2: 'buttonList',
      questions:[],
      modalQuestionsStage: 0,
      modalQuestionFinished: false,
      nextButton: 'fas fa-chevron-circle-right next--hidden',
      modalButtonYes: 'modal__btn--no',
      modalButtonNo: 'modal__btn--no'
    };
    this.launchLogin = this.launchLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.postEstablishments = this.postEstablishments.bind(this);
    this.login = this.login.bind(this);
    this.errorData = this.errorData.bind(this);
    this.handleChangeInputEmail = this.handleChangeInputEmail.bind(this);
    this.handleChangeInputPassword = this.handleChangeInputPassword.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.getQuestions=this.getQuestions.bind(this);
    this.setModalQuestionStage = this.setModalQuestionStage.bind(this);
    this.modalButtons = this.modalButtons.bind(this);
  }

  componentWillMount() {
    const savedToken = JSON.parse(localStorage.getItem("token"));
    if (savedToken) {
      this.postEstablishments(savedToken);
    }
  }

  logout() {
    localStorage.removeItem("token");
    this.setState({
      email: "usuario",
      classError: "hidden",
      classErrorInputEmail: "form-input form-input--top",
      classErrorInputPassword: "form-input",
      inputE: "",
      inputP: ""
    });
    this.props.history.push("/");
  }

  postEstablishments(savedToken) {
    const establishments =
      "https://ada-controller.deploy-cd.com/api/establishments";
    fetch(establishments, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + savedToken
      }
    })
      .then(response => response.json())
      .then(response2 => {
        const establishment = response2;
        this.setState({
          establishments: establishment
        });
        this.props.history.push("/LayoutPrincipal");
      });
  }

  login(email, password) {
    const url = "https://ada-controller.deploy-cd.com/api/login_check";
    const establishments =
      "https://ada-controller.deploy-cd.com/api/establishments";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ _username: email, _password: password }),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem("token", JSON.stringify(response.token));
          fetch(establishments, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + response.token
            }
          })
            .then(response1 => response1.json())
            .then(response2 => {
              this.setState({
                establishments: response2
              });
            });
          this.setState({
            email: email,
            loginError: false
          });
          this.props.history.push("/LayoutPrincipal");
        } else {
          this.errorData();
        }
      });
  }

  errorData() {
    this.setState({
      loginError: true,
      classError: "visible",
      classErrorInputEmail: "errorEmail",
      classErrorInputPassword: "error",
      inputE: "",
      inputP: ""
    });
  }

  launchLogin(email, password) {
    const savedToken = JSON.parse(localStorage.getItem("token"));
    this.setState({
      email: email
    });
    if (savedToken) {
      this.postEstablishments(savedToken);
    } else {
      this.login(email, password);
    }
  }

  handleChangeInputEmail(inputE) {
    this.setState({
      inputE: inputE,
      classError: "hidden",
      classErrorInputEmail: "form-input form-input--top",
      classErrorInputPassword: "form-input"
    });
  }

  handleChangeInputPassword(inputP) {
    this.setState({
      inputP: inputP
    });
  }

  handleClickMenu(eventclick) {
    if (eventclick.currentTarget.getAttribute('id') === 'button1') {
      this.setState({
        colorMenuButton1: 'buttonList buttonSelection',
        colorMenuButton2: 'buttonList'
      })
    } else {
      this.setState({
        colorMenuButton1: 'buttonList',
        colorMenuButton2: 'buttonList buttonSelection'
      })
    }
  }

  getDetails(id) {
    const urlDetails = "https://ada-controller.deploy-cd.com/api/visits";
    const savedToken = JSON.parse(localStorage.getItem("token"));

    fetch(urlDetails, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + savedToken
      }
    })
      .then(response1 => {
        return response1.json();
      })
      .then(response2 => {
        this.setState({
          detailsEstablishment: response2.data,
          selectedEstablishment: id
        });
      });
  }

  getQuestions() {
    const urlQuestions = "https://ada-controller.deploy-cd.com/api/challenge/2";
    const savedToken = JSON.parse(localStorage.getItem("token"));

    fetch(urlQuestions, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + savedToken
      }
    })
      .then(response1 => {
        return response1.json();
      })
      .then(response2 => {
        this.setState({
          questions: response2.data
        });
      });
  }

  onOpen = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  onClose = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  setModalQuestionStage = () => {
    let newStage = this.state.modalQuestionsStage + 1;

    if (newStage > this.state.questions[0].questions.length - 1) {
      newStage = this.state.questions[0].questions.length - 1;
      this.setState({
        modalQuestionFinished: true
      });
    }

    this.setState({
      modalQuestionsStage: newStage,
      modalButtonYes: 'modal__btn--no',
      modalButtonNo: 'modal__btn--no',
      nextButton: 'fas fa-chevron-circle-right next--hidden'
    });
  }

 modalButtons(eventclick) {
   if (eventclick.currentTarget.getAttribute('id') === 'yes') {
     this.setState({
       nextButton: 'fas fa-chevron-circle-right next--visible',
       modalButtonYes: 'modal__btn--yes',
       modalButtonNo: 'modal__btn--no'
     })
   } else {
     this.setState({
       nextButton: 'fas fa-chevron-circle-right next--visible',
       modalButtonYes: 'modal__btn--no',
       modalButtonNo: 'modal__btn--yes'
     })
   }
 }

  render() {
    //localStorage.removeItem('token');
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                launchLogin={this.launchLogin}
                loginError={this.state.loginError}
                classError={this.state.classError}
                inputE={this.state.inputE}
                inputP={this.state.inputP}
                classErrorInputPassword={this.state.classErrorInputPassword}
                classErrorInputEmail={this.state.classErrorInputEmail}
                handleChangeInputEmail={this.handleChangeInputEmail}
                handleChangeInputPassword={this.handleChangeInputPassword}
              />
            )}
          />
          <Route
            path="/LayoutPrincipal"
            render={props => (
              <LayoutPrincipal
                email={this.state.email}
                establishments={this.state.establishments}
                logout={this.logout}
                match={props.match}
                selectedEstablishment={this.state.selectedEstablishment}
                detailsEstablishment={this.state.detailsEstablishment}
                getDetails={this.getDetails}
                modalStatus={this.state.modalIsOpen}
                onOpen={this.onOpen}
                onClose={this.onClose}
                clickmenu={this.handleClickMenu}
                colorMenuButton1={this.state.colorMenuButton1}
                colorMenuButton2={this.state.colorMenuButton2}
                getQuestions={this.getQuestions}
                questions={this.state.questions}
                modalQuestionsStage={this.state.modalQuestionsStage}
                setModalQuestionStage={this.setModalQuestionStage}
                modalQuestionFinished={this.state.modalQuestionFinished}
                nextButton={this.state.nextButton}
                answerButtons={this.answerButtons}
                modalButtons={this.modalButtons}
                modalButtonYes={this.state.modalButtonYes}
                modalButtonNo={this.state.modalButtonNo}
              />
            )}
          />
        </Switch>
        {/* si this.state.loginError es true, pintamos lo que meta dentro de ( )
        si this.state.loginError es false, NO pintamos lo que meta dentro de ( ) */}
      </div>
    );
  }
}

export default withRouter(App);
