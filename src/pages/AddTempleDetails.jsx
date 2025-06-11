import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MapPin, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
    MenuItem,
    Select,
    TextField,
    InputLabel,
    FormControl,
} from '@mui/material';

const fakeApiCall = (data) =>
    new Promise((resolve) => {
        console.log("Form submitted:", data);
        setTimeout(() => resolve({ success: true }), 1000);
    });

const validationSchema = Yup.object().shape({
    templeName: Yup.string().required('Required'),
    landline: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    pocPhone: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
});

const AddTempleDetails = () => {
    const navigate = useNavigate();
    const mapUrl = 'https://maps.app.goo.gl/PUakcMnc4Dzr3SWv6';

    return (

        <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
            <div className="bg-white rounded-xl shadow p-6 md:p-10 max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Add a Temple</h1>
                <p className="text-gray-500 mb-6">Complete the form to add the temple.</p>

                <Formik
                    initialValues={{
                        templeName: '',
                        landline: '',
                        firstName: '',
                        lastName: '',
                        pocPhone: '',
                        altPhone: '',
                        bankName: '',
                        accountHolder: '',
                        accountNumber: '',
                        ifsc: '',
                        upi: '',
                        pan: '',
                        city: 'Hyderabad',
                        state: 'Telangana',
                        zip: '500047',
                        country: 'India',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        await fakeApiCall(values);
                        navigate('/temple-form');
                    }}
                >
                    {({ values, handleChange, errors, touched }) => (
                        <Form className="space-y-6">

                            {/* Basic Details */}
                            <div>
                                <h3 className="text-gray-700 font-medium mb-4">Basic Details</h3>
                                <div className="flex gap-4 flex-wrap">
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                        <label htmlFor="templeName" className="text-sm mb-1">Temple Name</label>
                                        <TextField
                                            id="templeName"
                                            name="templeName"
                                            value={values.templeName}
                                            onChange={handleChange}
                                            size="small"
                                            placeholder="Temple Name"
                                            error={touched.templeName && Boolean(errors.templeName)}
                                            helperText={touched.templeName && errors.templeName}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[30%]">
                                        <label className="text-sm text-gray-700 mb-1">Landline (if any)</label>
                                        <div className="flex gap-2">
                                            <FormControl size="small" className="w-[50%] min-w-[80px]">
                                                <Select defaultValue="+91">
                                                    <MenuItem value="+91">+91</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                id="landline"
                                                name="landline"
                                                value={values.landline}
                                                onChange={handleChange}
                                                size="small"
                                                placeholder="Landline"
                                                className="w-[65%]"
                                                error={touched.landline && Boolean(errors.landline)}
                                                helperText={touched.landline && errors.landline}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* POC DETAILS */}
                            <div className="mb-6">
                                <h3 className="text-gray-700 font-medium mb-4">POC Details</h3>
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
                            {/* Payment Details */}
                            <div>
                                <h3 className="text-gray-700 font-medium mb-4">Payment Details</h3>
                                <div className="flex flex-wrap gap-4 items-start">
                                    {/* Bank Name */}
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[24%]">
                                        <label htmlFor="bankName" className="text-sm mb-1">Bank Name</label>
                                        <TextField
                                            id="bankName"
                                            name="bankName"
                                            value={values.bankName}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </div>

                                    {/* Account Holder Name */}
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[24%]">
                                        <label htmlFor="accountHolder" className="text-sm mb-1">Account Holder's Name</label>
                                        <TextField
                                            id="accountHolder"
                                            name="accountHolder"
                                            value={values.accountHolder}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </div>

                                    {/* Bank Account Number */}
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[24%]">
                                        <label htmlFor="accountNumber" className="text-sm mb-1">Bank Account Number</label>
                                        <TextField
                                            id="accountNumber"
                                            name="accountNumber"
                                            value={values.accountNumber}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </div>

                                    {/* IFSC Code */}
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[24%]">
                                        <label htmlFor="ifsc" className="text-sm mb-1">IFSC Code</label>
                                        <TextField
                                            id="ifsc"
                                            name="ifsc"
                                            value={values.ifsc}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </div>



                                    <div className="flex justify-center my-3 w-full">
                                        <p className="text-sm text-gray-800 font-semibold">(or)</p>
                                    </div>

                                    {/* UPI & PAN */}
                                    <div className="flex flex-col w-full sm:w-[48%] md:w-[24%] gap-4">
                                        <div>
                                            <label htmlFor="upi" className="text-sm mb-1 block">UPI Id</label>
                                            <TextField
                                                id="upi"
                                                name="upi"
                                                value={values.upi}
                                                onChange={handleChange}
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pan" className="text-sm mb-1 block">PAN Number</label>
                                            <TextField
                                                id="pan"
                                                name="pan"
                                                value={values.pan}
                                                onChange={handleChange}
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
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

                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <div className="flex flex-col w-full md:w-1/4 mb-4 md:mb-0">
                                        <label className="text-sm text-gray-700 mb-1">State</label>
                                        <TextField
                                            name="state"
                                            size="small"
                                            value={values.state}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="flex flex-col w-full md:w-1/4 mb-4 md:mb-0">
                                        <label className="text-sm text-gray-700 mb-1">Zip Code</label>
                                        <TextField
                                            name="zip"
                                            size="small"
                                            value={values.zip}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="flex flex-col w-full md:w-1/4">
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

                            {/* Media Upload */}
                            <div>
                                <h3 className="text-gray-700 font-medium mb-4">Media</h3>
                                <div className="w-full sm:w-[60%] md:w-[30%] border-2 border-dashed border-orange-300 rounded-lg p-6 bg-orange-50 text-center relative">
                                    <Upload className="mx-auto text-orange-400 mb-2" />
                                    <p className="text-sm text-gray-600">
                                        Drag & drop files or{' '}
                                        <label htmlFor="fileUpload" className="text-orange-600 font-medium cursor-pointer underline">
                                            Browse
                                        </label>
                                    </p>
                                    <input type="file" id="fileUpload" className="hidden" />
                                    <p className="text-xs text-gray-400 mt-1">Supported formats: JPG, PNG, MP4</p>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-6 px-6 py-2 rounded-md bg-[#D75A28] text-white font-medium text-sm"
                            >
                                Save & Next
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddTempleDetails;