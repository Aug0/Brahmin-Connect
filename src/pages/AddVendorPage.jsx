import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  Radio,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Button,
  Typography,
} from "@mui/material";

const vendors = [
  {
    name: "Temple",
    img: "src/assets/Temple.png",
  },
  {
    name: "Pooja Store",
    img: "src/assets/Pooja Store.png",
  },
  {
    name: "Poojari",
    img: "src/assets/Poojari.png",
  },
];

const validationSchema = Yup.object().shape({
  vendor: Yup.string().required("Please select a vendor"),
});

const VendorPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (values.vendor === "Temple") {
      navigate("/temple-details");
    } else if (values.vendor === "Pooja Store") {
      navigate("/pooja-store");
    } else if (values.vendor === "Poojari") {
      navigate("/add-partner-form");
    }
  };

  return (
    // <div className="flex h-screen bg-[#FCFBF5] overflow-hidden">
    //   <Sidebar />

    //   <div className="flex-1 flex flex-col">
    //     <Topbar />

    //     <div className="flex-1 m-4 md:m-6 p-4 md:p-10 bg-white rounded-2xl shadow-md overflow-y-auto">
    //       <Typography
    //         variant="h5"
    //         className="text-[#1E1E1E] font-semibold mb-2"
    //       >
    //         Add Vendor
    //       </Typography>
    //       <Typography className="text-gray-500 mb-8 text-base">
    //         Choose vendor type and complete the form to add them.
    //       </Typography>

    //       <Formik
    //         initialValues={{vendor: ""}}
    //         validationSchema={validationSchema}
    //         onSubmit={handleSubmit}
    //       >
    //         {({values, errors, touched, handleChange, handleBlur}) => (
    //           <Form>
    //             <FormControl
    //               error={touched.vendor && Boolean(errors.vendor)}
    //               className="w-full"
    //             >
    //               {/* Custom Flex Layout instead of MUI row */}
    //               <div className="mt-10 ml-[-85px] !items-left !text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
    //                 {vendors.map(vendor => (
    //                   <div
    //                     key={vendor.name}
    //                     className="flex flex-col items-center text-center"
    //                   >
    //                     <img
    //                       src={vendor.img}
    //                       alt={vendor.name}
    //                       className="w-full max-w-[300px] h-auto aspect-[4/3] object-contain mb-4"
    //                     />
    //                     <FormControlLabel
    //                       value={vendor.name}
    //                       control={
    //                         <Radio
    //                           name="vendor"
    //                           checked={values.vendor === vendor.name}
    //                           onChange={handleChange}
    //                           onBlur={handleBlur}
    //                           sx={{
    //                             color: "#D75A28",
    //                             "&.Mui-checked": {
    //                               color: "#D75A28",
    //                             },
    //                           }}
    //                         />
    //                       }
    //                       label={
    //                         <Typography className="text-black text-base md:text-lg">
    //                           {vendor.name}
    //                         </Typography>
    //                       }
    //                     />
    //                   </div>
    //                 ))}
    //               </div>

    //               {touched.vendor && errors.vendor && (
    //                 <FormHelperText className="ml-4 mt-1 text-sm text-red-600">
    //                   {errors.vendor}
    //                 </FormHelperText>
    //               )}
    //             </FormControl>

    //             <div className="mt-8">
    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 disabled={!values.vendor}
    //                 sx={{
    //                   px: 4,
    //                   py: 1.5,
    //                   borderRadius: "8px",
    //                   backgroundColor: "#D75A28",
    //                   textTransform: "none",
    //                   fontWeight: "bold",
    //                   "&:hover": {
    //                     backgroundColor: "#b44c1e",
    //                   },
    //                 }}
    //               >
    //                 Next
    //               </Button>
    //             </div>
    //           </Form>
    //         )}
    //       </Formik>
    //     </div>
    //   </div>
    // </div>
    <div className="flex-1 m-4 md:m-6 p-4 md:p-10 bg-white rounded-2xl shadow-md overflow-y-auto">
          <Typography
            variant="h5"
            className="text-[#1E1E1E] font-semibold mb-2"
          >
            Add Vendor
          </Typography>
          <Typography className="text-gray-500 mb-8 text-base">
            Choose vendor type and complete the form to add them.
          </Typography>

          <Formik
            initialValues={{vendor: ""}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({values, errors, touched, handleChange, handleBlur}) => (
              <Form>
                <FormControl
                  error={touched.vendor && Boolean(errors.vendor)}
                  className="w-full"
                >
                  {/* Custom Flex Layout instead of MUI row */}
                  <div className="mt-10 ml-[-85px] !items-left !text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {vendors.map(vendor => (
                      <div
                        key={vendor.name}
                        className="flex flex-col items-center text-center"
                      >
                        <img
                          src={vendor.img}
                          alt={vendor.name}
                          className="w-full max-w-[300px] h-auto aspect-[4/3] object-contain mb-4"
                        />
                        <FormControlLabel
                          value={vendor.name}
                          control={
                            <Radio
                              name="vendor"
                              checked={values.vendor === vendor.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              sx={{
                                color: "#D75A28",
                                "&.Mui-checked": {
                                  color: "#D75A28",
                                },
                              }}
                            />
                          }
                          label={
                            <Typography className="text-black text-base md:text-lg">
                              {vendor.name}
                            </Typography>
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {touched.vendor && errors.vendor && (
                    <FormHelperText className="ml-4 mt-1 text-sm text-red-600">
                      {errors.vendor}
                    </FormHelperText>
                  )}
                </FormControl>

                <div className="mt-8">
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!values.vendor}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: "8px",
                      backgroundColor: "#D75A28",
                      textTransform: "none",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#b44c1e",
                      },
                    }}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
  );
};

export default VendorPage;
