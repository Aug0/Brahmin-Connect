import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { MapPin } from 'lucide-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from '@mui/material';

const AddPoojaPartner = () => {
    const navigate = useNavigate();
    const mapUrl = 'https://maps.app.goo.gl/PUakcMnc4Dzr3SWv6';

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: '',
        altPhone: '',
        bankName: '',
        accountHolder: '',
        accountNumber: '',
        ifscCode: '',
        upiId: '',
        location: '',
        city: 'Hyderabad',
        state: '',
        zip: '',
        country: 'India',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        altPhone: Yup.string(),
        bankName: Yup.string(),
        accountHolder: Yup.string(),
        accountNumber: Yup.string(),
        ifscCode: Yup.string(),
        upiId: Yup.string(),
        location: Yup.string(),
        city: Yup.string().required('Required'),
        state: Yup.string(),
        zip: Yup.string(),
        country: Yup.string(),
    });

    const handleSubmit = (values) => {
        alert('Submitted successfully!');
        navigate('/services');
    };

    return (
        // <div className="flex h-screen bg-[#FCFBF5] overflow-hidden">
        //     <Sidebar />
        //     <div className="flex-1 flex flex-col overflow-hidden">
        //         <div className="sticky top-0 z-20">
        //             <Topbar />
        //         </div>
        //         <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 p-6 pt-4">
        //             <div className="bg-white rounded-xl shadow p-10 max-w-6xl mx-auto">
        //                 <h1 className="text-2xl font-semibold text-gray-800 mb-2">Add a Partner</h1>
        //                 <p className="text-gray-500 mb-6">Complete the form to add them.</p>

        //                 <Formik
        //                     initialValues={initialValues}
        //                     validationSchema={validationSchema}
        //                     onSubmit={handleSubmit}
        //                 >
        //                     {({ values, handleChange, touched, errors }) => (
        //                         <Form>
        //                             {/* BASIC DETAILS */}
                                  

        //                             {/* POC DETAILS */}
        //                             <div className="mb-6">
        //                                 <h3 className="text-gray-700 font-medium mb-4">Basic Details</h3>
        //                                 <div className="flex gap-4 flex-wrap mb-4">
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
        //                                         <label className="text-sm text-gray-700 mb-1">First Name</label>
        //                                         <TextField
        //                                             name="firstName"
        //                                             size="small"
        //                                             value={values.firstName}
        //                                             onChange={handleChange}
        //                                             placeholder="First Name"
        //                                         />
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Last Name</label>
        //                                         <TextField
        //                                             name="lastName"
        //                                             size="small"
        //                                             value={values.lastName}
        //                                             onChange={handleChange}
        //                                             placeholder="Last Name"
        //                                         />
        //                                     </div>
        //                                 </div>
        //                                 <div className="flex gap-4 flex-wrap">
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Phone Number</label>
        //                                         <div className="flex gap-2 sm:flex-nowrap flex-wrap">
        //                                             <FormControl size="small" className="w-[50%] min-w-[80px]">
        //                                                 <Select defaultValue="+91">
        //                                                     <MenuItem value="+91">+91</MenuItem>
        //                                                 </Select>
        //                                             </FormControl>
        //                                             <TextField
        //                                                 name="phone"
        //                                                 size="small"
        //                                                 value={values.phone}
        //                                                 onChange={handleChange}
        //                                                 placeholder="Phone"
        //                                                 className="flex-1"
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Alternate Phone Number</label>
        //                                         <div className="flex gap-2 sm:flex-nowrap flex-wrap">
        //                                             <FormControl size="small" className="w-[40%] min-w-[80px]">
        //                                                 <Select defaultValue="+91">
        //                                                     <MenuItem value="+91">+91</MenuItem>
        //                                                 </Select>
        //                                             </FormControl>
        //                                             <TextField
        //                                                 name="altPhone"
        //                                                 size="small"
        //                                                 value={values.altPhone}
        //                                                 onChange={handleChange}
        //                                                 placeholder="Alternate Phone"
        //                                                 className="flex-1"
        //                                             />
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             {/* PAYMENT DETAILS */}
        //                             <div className="mb-6">
        //                                 <h3 className="text-gray-700 font-medium mb-4">Payment Details</h3>
        //                                 <div className="flex gap-4 flex-wrap mb-4">
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Bank Name</label>
        //                                         <TextField
        //                                             name="bankName"
        //                                             size="small"
        //                                             value={values.bankName}
        //                                             onChange={handleChange}
        //                                             placeholder="Bank Name"
        //                                         />
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Account Holder's Name</label>
        //                                         <TextField
        //                                             name="accountHolder"
        //                                             size="small"
        //                                             value={values.accountHolder}
        //                                             onChange={handleChange}
        //                                             placeholder="Account Holder"
        //                                         />
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Bank Account Number</label>
        //                                         <TextField
        //                                             name="accountNumber"
        //                                             size="small"
        //                                             value={values.accountNumber}
        //                                             onChange={handleChange}
        //                                             placeholder="Account Number"
        //                                         />
        //                                     </div>
        //                                 </div>
        //                                 <div className="flex flex-col w-full sm:w-[48%] md:w-[25%] mb-2">
        //                                     <label className="text-sm text-gray-700 mb-1">IFSC Code</label>
        //                                     <TextField
        //                                         name="ifsc"
        //                                         size="small"
        //                                         value={values.ifsc}
        //                                         onChange={handleChange}
        //                                         placeholder="IFSC Code"
        //                                     />
        //                                 </div>
        //                                 <div className="flex justify-center my-3 w-full">
        //                                     <p className="text-sm text-gray-800 font-semibold">(or)</p>
        //                                 </div>

        //                                 <div className="flex flex-col w-full sm:w-[48%] md:w-[25%] mb-4">
        //                                     <label className="text-sm text-gray-700 mb-1">UPI ID</label>
        //                                     <TextField
        //                                         name="upi"
        //                                         size="small"
        //                                         value={values.upi}
        //                                         onChange={handleChange}
        //                                         placeholder="vendorname@upi"
        //                                     />
        //                                 </div>
        //                                 <div className="flex gap-4 mb-4 flex-wrap">
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">GST Number</label>
        //                                         <TextField
        //                                             name="gst"
        //                                             size="small"
        //                                             value={values.gst}
        //                                             onChange={handleChange}
        //                                             placeholder="GST Number"
        //                                         />
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">PAN Number</label>
        //                                         <TextField
        //                                             name="pan"
        //                                             size="small"
        //                                             value={values.pan}
        //                                             onChange={handleChange}
        //                                             placeholder="PAN Number"
        //                                         />
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             {/* ADDRESS */}
        //                             <div className="mb-6">
        //                                 <h3 className="text-gray-700 font-medium mb-4">Address</h3>
        //                                 <div className="flex gap-4 flex-wrap mb-4">
        //                                     <div className="flex flex-col w-full sm:w-[70%] md:w-[40%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Location</label>
        //                                         <a
        //                                             href={mapUrl}
        //                                             target="_blank"
        //                                             rel="noopener noreferrer"
        //                                             className="flex items-center bg-gray-100 border rounded px-2 py-1 text-xs text-blue-600 underline cursor-pointer break-all"
        //                                         >
        //                                             <MapPin className="text-gray-800 w-4 h-4 mr-2" />
        //                                             {mapUrl}
        //                                         </a>
        //                                         <p className="text-xs text-gray-400 mt-1">Please copy paste the location here</p>
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
        //                                         <label className="text-sm text-gray-700 mb-1">City</label>
        //                                         <FormControl size="small">
        //                                             <Select
        //                                                 name="city"
        //                                                 value={values.city}
        //                                                 onChange={handleChange}
        //                                             >
        //                                                 <MenuItem value="Hyderabad">Hyderabad</MenuItem>
        //                                             </Select>
        //                                         </FormControl>
        //                                     </div>
        //                                 </div>
        //                                 <div className="flex gap-4 flex-wrap">
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">State</label>
        //                                         <TextField
        //                                             name="state"
        //                                             size="small"
        //                                             value={values.state}
        //                                             onChange={handleChange}
        //                                         />
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Zip Code</label>
        //                                         <TextField
        //                                             name="zip"
        //                                             size="small"
        //                                             value={values.zip}
        //                                             onChange={handleChange}
        //                                         />
        //                                     </div>
        //                                     <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
        //                                         <label className="text-sm text-gray-700 mb-1">Country</label>
        //                                         <FormControl size="small">
        //                                             <Select
        //                                                 name="country"
        //                                                 value={values.country}
        //                                                 onChange={handleChange}
        //                                             >
        //                                                 <MenuItem value="India">India</MenuItem>
        //                                             </Select>
        //                                         </FormControl>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <Button
        //                                 variant="contained"
        //                                 type="submit"
        //                                 className="!bg-[#D75A28] text-white mt-6 px-6 py-2 rounded-md text-sm"
        //                             >
        //                                 Save & Next
        //                             </Button>
        //                         </Form>
        //                     )}
        //                 </Formik>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 p-6 pt-4">
                    <div className="bg-white rounded-xl shadow p-10 max-w-6xl mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Add a Partner</h1>
                        <p className="text-gray-500 mb-6">Complete the form to add them.</p>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleChange, touched, errors }) => (
                                <Form>
                                    {/* BASIC DETAILS */}
                                  

                                    {/* POC DETAILS */}
                                    <div className="mb-6">
                                        <h3 className="text-gray-700 font-medium mb-4">Basic Details</h3>
                                        <div className="flex gap-4 flex-wrap mb-4">
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                                <label className="text-sm text-gray-700 mb-1">First Name</label>
                                                <TextField
                                                    name="firstName"
                                                    size="small"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                                <label className="text-sm text-gray-700 mb-1">Last Name</label>
                                                <TextField
                                                    name="lastName"
                                                    size="small"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 flex-wrap">
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                                <label className="text-sm text-gray-700 mb-1">Phone Number</label>
                                                <div className="flex gap-2 sm:flex-nowrap flex-wrap">
                                                    <FormControl size="small" className="w-[50%] min-w-[80px]">
                                                        <Select defaultValue="+91">
                                                            <MenuItem value="+91">+91</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        name="phone"
                                                        size="small"
                                                        value={values.phone}
                                                        onChange={handleChange}
                                                        placeholder="Phone"
                                                        className="flex-1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                                <label className="text-sm text-gray-700 mb-1">Alternate Phone Number</label>
                                                <div className="flex gap-2 sm:flex-nowrap flex-wrap">
                                                    <FormControl size="small" className="w-[40%] min-w-[80px]">
                                                        <Select defaultValue="+91">
                                                            <MenuItem value="+91">+91</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        name="altPhone"
                                                        size="small"
                                                        value={values.altPhone}
                                                        onChange={handleChange}
                                                        placeholder="Alternate Phone"
                                                        className="flex-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAYMENT DETAILS */}
                                    <div className="mb-6">
                                        <h3 className="text-gray-700 font-medium mb-4">Payment Details</h3>
                                        <div className="flex gap-4 flex-wrap mb-4">
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">Bank Name</label>
                                                <TextField
                                                    name="bankName"
                                                    size="small"
                                                    value={values.bankName}
                                                    onChange={handleChange}
                                                    placeholder="Bank Name"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">Account Holder's Name</label>
                                                <TextField
                                                    name="accountHolder"
                                                    size="small"
                                                    value={values.accountHolder}
                                                    onChange={handleChange}
                                                    placeholder="Account Holder"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">Bank Account Number</label>
                                                <TextField
                                                    name="accountNumber"
                                                    size="small"
                                                    value={values.accountNumber}
                                                    onChange={handleChange}
                                                    placeholder="Account Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full sm:w-[48%] md:w-[25%] mb-2">
                                            <label className="text-sm text-gray-700 mb-1">IFSC Code</label>
                                            <TextField
                                                name="ifsc"
                                                size="small"
                                                value={values.ifsc}
                                                onChange={handleChange}
                                                placeholder="IFSC Code"
                                            />
                                        </div>
                                        <div className="flex justify-center my-3 w-full">
                                            <p className="text-sm text-gray-800 font-semibold">(or)</p>
                                        </div>

                                        <div className="flex flex-col w-full sm:w-[48%] md:w-[25%] mb-4">
                                            <label className="text-sm text-gray-700 mb-1">UPI ID</label>
                                            <TextField
                                                name="upi"
                                                size="small"
                                                value={values.upi}
                                                onChange={handleChange}
                                                placeholder="vendorname@upi"
                                            />
                                        </div>
                                        <div className="flex gap-4 mb-4 flex-wrap">
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">GST Number</label>
                                                <TextField
                                                    name="gst"
                                                    size="small"
                                                    value={values.gst}
                                                    onChange={handleChange}
                                                    placeholder="GST Number"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">PAN Number</label>
                                                <TextField
                                                    name="pan"
                                                    size="small"
                                                    value={values.pan}
                                                    onChange={handleChange}
                                                    placeholder="PAN Number"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ADDRESS */}
                                    <div className="mb-6">
                                        <h3 className="text-gray-700 font-medium mb-4">Address</h3>
                                        <div className="flex gap-4 flex-wrap mb-4">
                                            <div className="flex flex-col w-full sm:w-[70%] md:w-[40%]">
                                                <label className="text-sm text-gray-700 mb-1">Location</label>
                                                <a
                                                    href={mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center bg-gray-100 border rounded px-2 py-1 text-xs text-blue-600 underline cursor-pointer break-all"
                                                >
                                                    <MapPin className="text-gray-800 w-4 h-4 mr-2" />
                                                    {mapUrl}
                                                </a>
                                                <p className="text-xs text-gray-400 mt-1">Please copy paste the location here</p>
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                                <label className="text-sm text-gray-700 mb-1">City</label>
                                                <FormControl size="small">
                                                    <Select
                                                        name="city"
                                                        value={values.city}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 flex-wrap">
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">State</label>
                                                <TextField
                                                    name="state"
                                                    size="small"
                                                    value={values.state}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">Zip Code</label>
                                                <TextField
                                                    name="zip"
                                                    size="small"
                                                    value={values.zip}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex flex-col w-full sm:w-[48%] md:w-[25%]">
                                                <label className="text-sm text-gray-700 mb-1">Country</label>
                                                <FormControl size="small">
                                                    <Select
                                                        name="country"
                                                        value={values.country}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="India">India</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        className="!bg-[#D75A28] text-white mt-6 px-6 py-2 rounded-md text-sm"
                                    >
                                        Save & Next
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
    );
};

export default AddPoojaPartner;
