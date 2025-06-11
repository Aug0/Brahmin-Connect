// src/pages/PoojaStoreServices.jsx

import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { TextField, Button } from "@mui/material";
import { Formik, Form, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  services: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Service name is required"),
        price: Yup.number()
          .typeError("Price must be a number")
          .positive("Price must be positive")
          .required("Price is required"),
        description: Yup.string(),
      })
    )
    .min(1, "At least one service is required"),
});

const initialValues = {
  services: [{ name: "", description: "", price: "" }],
};

const PoojaStoreServices = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        "/api/pooja-store-services",
        values.services
      );
      console.log("Submitted Services:", response.data);
      alert("Services submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting services:", error);
      alert("Failed to submit services. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // <div className="flex h-screen bg-[#FCFBF5] overflow-hidden">
    //   <Sidebar />

    //   <div className="flex-1 flex flex-col overflow-hidden">
    //     {/* Topbar */}
    //     <div className="sticky top-0 z-20">
    //       <Topbar />
    //     </div>

    //     {/* Scrollable content */}
    //     <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 p-6 pt-4">
    //       <div className="bg-white rounded-xl shadow p-10 max-w-6xl mx-auto">
    //         <h1 className="text-2xl font-semibold text-gray-800 mb-2">
    //           Add a Partner
    //         </h1>
    //         <p className="text-gray-500 mb-6">
    //           Complete the form to add the pooja store.
    //         </p>

    //         <Formik
    //           initialValues={initialValues}
    //           validationSchema={validationSchema}
    //           onSubmit={handleSubmit}
    //         >
    //           {({
    //             values,
    //             errors,
    //             touched,
    //             handleChange,
    //             handleBlur,
    //             isSubmitting,
    //           }) => (
    //             <Form>
    //               <FieldArray name="services">
    //                 {({ push }) => (
    //                   <>
    //                     <div className="flex items-center gap-4 mb-6">
    //                       <h2 className="text-xl font-semibold text-gray-800">
    //                         Services
    //                       </h2>
    //                       <Button
    //                         type="button"
    //                         variant="outlined"
    //                         className="text-[#D75A28] border-[#D75A28] normal-case"
    //                         sx={{
    //                           borderColor: "#D75A28",
    //                           color: "#D75A28",
    //                           fontWeight: 500,
    //                           fontSize: "0.875rem",
    //                           padding: "4px 16px",
    //                           textTransform: "none",
    //                           "&:hover": {
    //                             backgroundColor: "#fef4f1",
    //                             borderColor: "#D75A28",
    //                           },
    //                         }}
    //                         onClick={() =>
    //                           push({ name: "", description: "", price: "" })
    //                         }
    //                       >
    //                         Add Another Service
    //                       </Button>
    //                     </div>

    //                     {values.services.map((service, index) => {
    //                       const nameError = getIn(
    //                         errors,
    //                         `services[${index}].name`
    //                       );
    //                       const nameTouched = getIn(
    //                         touched,
    //                         `services[${index}].name`
    //                       );
    //                       const priceError = getIn(
    //                         errors,
    //                         `services[${index}].price`
    //                       );
    //                       const priceTouched = getIn(
    //                         touched,
    //                         `services[${index}].price`
    //                       );
    //                       const descriptionError = getIn(
    //                         errors,
    //                         `services[${index}].description`
    //                       );
    //                       const descriptionTouched = getIn(
    //                         touched,
    //                         `services[${index}].description`
    //                       );

    //                       return (
    //                         <div key={index} className="mb-6 border-b pb-6">
    //                           <h3 className="font-medium text-gray-700 mb-3">
    //                             {index + 1}. Service Details
    //                           </h3>

    //                           <div className="flex gap-4">
    //                             {/* Left Column */}
    //                             <div className="flex flex-col w-1/3">
    //                               <label
    //                                 htmlFor={`services.${index}.name`}
    //                                 className="text-sm font-medium text-gray-700 mb-1"
    //                               >
    //                                 Service Name
    //                               </label>
    //                               <TextField
    //                                 id={`services.${index}.name`}
    //                                 name={`services.${index}.name`}
    //                                 placeholder="Type here"
    //                                 size="small"
    //                                 variant="outlined"
    //                                 value={service.name}
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 error={Boolean(nameError && nameTouched)}
    //                                 helperText={
    //                                   nameError && nameTouched ? nameError : ""
    //                                 }
    //                                 InputProps={{
    //                                   className: "bg-gray-100",
    //                                 }}
    //                               />

    //                               <label
    //                                 htmlFor={`services.${index}.price`}
    //                                 className="text-sm font-medium text-gray-700 mb-1 mt-4"
    //                               >
    //                                 Price
    //                               </label>
    //                               <TextField
    //                                 id={`services.${index}.price`}
    //                                 name={`services.${index}.price`}
    //                                 placeholder="₹ 0"
    //                                 size="small"
    //                                 variant="outlined"
    //                                 value={service.price}
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 error={Boolean(priceError && priceTouched)}
    //                                 helperText={
    //                                   priceError && priceTouched ? priceError : ""
    //                                 }
    //                                 InputProps={{
    //                                   className: "bg-gray-100",
    //                                 }}
    //                               />
    //                             </div>

    //                             {/* Right Column */}
    //                             <div className="flex flex-col w-[50%]">
    //                               <label
    //                                 htmlFor={`services.${index}.description`}
    //                                 className="text-sm font-medium text-gray-700 mb-1"
    //                               >
    //                                 Description
    //                               </label>
    //                               <TextField
    //                                 id={`services.${index}.description`}
    //                                 name={`services.${index}.description`}
    //                                 placeholder="..........."
    //                                 size="small"
    //                                 variant="outlined"
    //                                 value={service.description}
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 error={Boolean(descriptionError && descriptionTouched)}
    //                                 helperText={
    //                                   descriptionError && descriptionTouched
    //                                     ? descriptionError
    //                                     : ""
    //                                 }
    //                                 fullWidth
    //                                 InputProps={{
    //                                   className: "bg-gray-100",
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       );
    //                     })}
    //                   </>
    //                 )}
    //               </FieldArray>

    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 disabled={isSubmitting}
    //                 className="bg-[#D75A28] text-white hover:bg-[#c95021] normal-case"
    //                 sx={{
    //                   backgroundColor: "#D75A28",
    //                   ":hover": { backgroundColor: "#c95021" },
    //                   textTransform: "none",
    //                   fontWeight: 500,
    //                   fontSize: "0.875rem",
    //                   padding: "8px 24px",
    //                 }}
    //               >
    //                 {isSubmitting ? "Submitting..." : "Submit"}
    //               </Button>
    //             </Form>
    //           )}
    //         </Formik>
    //       </div>
    //     </div>
    //   </div>
    // </div>
   <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 p-6 pt-4">
          <div className="bg-white rounded-xl shadow p-10 max-w-6xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Add a Partner
            </h1>
            <p className="text-gray-500 mb-6">
              Complete the form to add the pooja store.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
              }) => (
                <Form>
                  <FieldArray name="services">
                    {({ push }) => (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <h2 className="text-xl font-semibold text-gray-800">
                            Services
                          </h2>
                          <Button
                            type="button"
                            variant="outlined"
                            className="text-[#D75A28] border-[#D75A28] normal-case"
                            sx={{
                              borderColor: "#D75A28",
                              color: "#D75A28",
                              fontWeight: 500,
                              fontSize: "0.875rem",
                              padding: "4px 16px",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "#fef4f1",
                                borderColor: "#D75A28",
                              },
                            }}
                            onClick={() =>
                              push({ name: "", description: "", price: "" })
                            }
                          >
                            Add Another Service
                          </Button>
                        </div>

                        {values.services.map((service, index) => {
                          const nameError = getIn(
                            errors,
                            `services[${index}].name`
                          );
                          const nameTouched = getIn(
                            touched,
                            `services[${index}].name`
                          );
                          const priceError = getIn(
                            errors,
                            `services[${index}].price`
                          );
                          const priceTouched = getIn(
                            touched,
                            `services[${index}].price`
                          );
                          const descriptionError = getIn(
                            errors,
                            `services[${index}].description`
                          );
                          const descriptionTouched = getIn(
                            touched,
                            `services[${index}].description`
                          );

                          return (
                            <div key={index} className="mb-6 border-b pb-6">
                              <h3 className="font-medium text-gray-700 mb-3">
                                {index + 1}. Service Details
                              </h3>

                              <div className="flex gap-4">
                                {/* Left Column */}
                                <div className="flex flex-col w-1/3">
                                  <label
                                    htmlFor={`services.${index}.name`}
                                    className="text-sm font-medium text-gray-700 mb-1"
                                  >
                                    Service Name
                                  </label>
                                  <TextField
                                    id={`services.${index}.name`}
                                    name={`services.${index}.name`}
                                    placeholder="Type here"
                                    size="small"
                                    variant="outlined"
                                    value={service.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(nameError && nameTouched)}
                                    helperText={
                                      nameError && nameTouched ? nameError : ""
                                    }
                                    InputProps={{
                                      className: "bg-gray-100",
                                    }}
                                  />

                                  <label
                                    htmlFor={`services.${index}.price`}
                                    className="text-sm font-medium text-gray-700 mb-1 mt-4"
                                  >
                                    Price
                                  </label>
                                  <TextField
                                    id={`services.${index}.price`}
                                    name={`services.${index}.price`}
                                    placeholder="₹ 0"
                                    size="small"
                                    variant="outlined"
                                    value={service.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(priceError && priceTouched)}
                                    helperText={
                                      priceError && priceTouched ? priceError : ""
                                    }
                                    InputProps={{
                                      className: "bg-gray-100",
                                    }}
                                  />
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col w-[50%]">
                                  <label
                                    htmlFor={`services.${index}.description`}
                                    className="text-sm font-medium text-gray-700 mb-1"
                                  >
                                    Description
                                  </label>
                                  <TextField
                                    id={`services.${index}.description`}
                                    name={`services.${index}.description`}
                                    placeholder="..........."
                                    size="small"
                                    variant="outlined"
                                    value={service.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(descriptionError && descriptionTouched)}
                                    helperText={
                                      descriptionError && descriptionTouched
                                        ? descriptionError
                                        : ""
                                    }
                                    fullWidth
                                    InputProps={{
                                      className: "bg-gray-100",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </FieldArray>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    className="bg-[#D75A28] text-white hover:bg-[#c95021] normal-case"
                    sx={{
                      backgroundColor: "#D75A28",
                      ":hover": { backgroundColor: "#c95021" },
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      padding: "8px 24px",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
  );
};

export default PoojaStoreServices;
