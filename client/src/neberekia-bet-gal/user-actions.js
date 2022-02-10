import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const loginUser = (values, history, setFieldError, setSubmitting) => {
  return () => {
    axios
      .post('http://localhost:5070/auth/login', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.status === 'failed') {
          const { message } = data;
          console.error(message);
        } else if (data.status === 'success') {
          const token = data.token;
          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(data.user)
                .then(() => {
                  history('/');
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const signupUser = (values, history, setFieldError, setSubmitting) => {
  return () => {
    axios
      .post('http://localhost:5070/auth/register', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === 'failed') {
          const { message } = data;
          console.log(message);
          setSubmitting(false);
        } else if (data.status === 'success') {
          const { email, password } = values;
          loginUser({ email, password }, history, setFieldError, setSubmitting);
        }
      })
      .catch((err) => console.eroor(err));
  };
};

export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history('/login');
  };
};
