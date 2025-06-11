import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import backgroundImage from '/src/assets/login-bg.jpg';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulated behavior
      alert('Password reset link has been "sent" (demo)');
      navigate('/reset-password');

      // Real API example:
      // await axios.post('/api/forgot-password', values);
    } catch (err) {
      alert(err.message || 'Failed to send reset link');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-5xl gap-6 sm:gap-10 pt-10 sm:pt-16 lg:pt-0">

        {/* Left Text Section */}
        <div className="text-white w-full max-w-sm text-center lg:text-left mt-12 sm:mt-14 lg:mt-[-30px] px-4">
          <div className="bg-white bg-opacity-45 h-8 sm:h-10 w-44 sm:w-72 mx-auto lg:mx-0 mb-3 rounded-sm" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2">
            Reset your<br />password
          </h1>
          <p className="text-sm sm:text-base">
            Enter your email to receive a <br /> password reset link
          </p>
        </div>

        {/* Form */}
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="bg-white px-5 py-6 sm:px-6 sm:py-8 rounded-xl shadow-lg w-full max-w-[90%] sm:max-w-sm space-y-7 text-gray-800 mt-8 sm:mt-14">
              <div className="space-y-1">
                <label className="block text-gray-800 font-bold text-sm">Email ID</label>
                <Field
                  as={TextField}
                  name="email"
                  placeholder="john@gmail.com"
                  fullWidth
                  variant="outlined"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      height: '50px',
                    },
                    '& .MuiInputBase-input': {
                      fontSize: '15px',
                    },
                  }}
                />
              </div>

              <div className="pb-20 sm:pb-28">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: '#e5672a',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                    textTransform: 'none',
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#d4551a',
                    },
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 w-full text-center text-white text-xs sm:text-sm z-10">
        © 2025 - All Rights Reserved
      </div>
    </div>
  );
}
