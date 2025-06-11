import { useNavigate } from 'react-router-dom';
import { TextField, Button, Modal, Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

export default function ResetPassword() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12"
      style={{ backgroundImage: "url('/src/assets/login-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl gap-6 sm:gap-10 pt-10 sm:pt-12 lg:pt-0">
        {/* Left Text Section */}
        <div className="text-white w-full max-w-sm text-center lg:text-left mt-16 sm:mt-20 lg:mt-[-20px] px-4 sm:ml-8 md:ml-26">
          <div className="bg-white bg-opacity-45 h-8 sm:h-10 w-48 sm:w-72 mx-auto lg:mx-0 mb-3 rounded-sm" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2">
            Login to<br />your account
          </h1>
          <p className="text-sm sm:text-base">Let's make things simpler</p>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{ newPassword: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setOpenModal(true);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm text-gray-800 space-y-6">
              {/* New Password */}
              <div>
                <label className="block text-gray-800 font-bold text-sm sm:text-base mb-1">
                  New Password
                </label>
                <Field
                  as={TextField}
                  name="newPassword"
                  type="password"
                  placeholder="Your password"
                  fullWidth
                  variant="outlined"
                  error={touched.newPassword && Boolean(errors.newPassword)}
                  helperText={touched.newPassword && errors.newPassword}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      height: { xs: '54px', sm: '56px', md: '50px' },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '16px', sm: '16px', md: '15px' },
                    },
                  }}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-800 font-bold text-sm sm:text-base mb-1">
                  Confirm Password
                </label>
                <Field
                  as={TextField}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  fullWidth
                  variant="outlined"
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      height: { xs: '54px', sm: '56px', md: '50px' },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '16px', sm: '16px', md: '15px' },
                    },
                  }}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                style={{
                  backgroundColor: '#E15C2B',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: '12px',
                  padding: '14px 0',
                }}
              >
                Set Password
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-white text-xs sm:text-sm z-10">
        © 2025 - All Rights Reserved
      </div>

      {/* Success Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            borderRadius: '20px',
            width: 420,
            maxWidth: '90%',
            boxShadow: 24,
            p: 4,
            pt: 6,
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={() => setOpenModal(false)}
            sx={{ position: 'absolute', top: 12, right: 12, color: '#333' }}
          >
            <CloseIcon />
          </IconButton>

          <CheckCircleIcon sx={{ fontSize: 70, color: '#2ECC40', mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '22px', color: '#2ECC40', mb: 1 }}>
            Password Changed
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#333', mb: 3 }}>
            Your password has been successfully changed
          </Typography>
          <Typography
            component="span"
            onClick={() => navigate('/')}
            sx={{
              fontSize: '14px',
              color: '#E15C2B',
              fontWeight: 500,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Login to continue
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
