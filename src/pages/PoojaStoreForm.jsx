import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import {
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { Plus } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const validationSchema = Yup.object().shape({
    items: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required("Item name is required"),
            description: Yup.string(),
            price: Yup.string().required("Price is required"),
            type: Yup.string().required("Type is required"),
            duration: Yup.string().when("type", {
                is: "Rent",
                then: Yup.string().required("Duration is required"),
            }),
            images: Yup.array(),
        })
    ),
});

const PoojaStoreForm = () => {
    const initialValues = {
        items: [
            {
                name: "Silver Bell",
                description: "",
                price: "₹1,500",
                type: "Sell",
                duration: "",
                images: ["/assets/bell-icon.svg"],
            },
            {
                name: "Silver Diya",
                description: "",
                price: "₹1,200",
                type: "Rent",
                duration: "24 hours",
                images: [],
            },
        ],
    };

    const handleSubmit = async (values) => {
        console.log("Submitted values:", values);
        alert("Form submitted successfully!");
    };

    return (
        // <div className="flex h-screen bg-[#FCFBF5] overflow-hidden">
        //     <Sidebar />
        //     <div className="flex-1 flex flex-col overflow-hidden">
        //         <div className="sticky top-0 z-20">
        //             <Topbar />
        //         </div>

        //         <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 p-6 pt-4">
        //             <div className="bg-white rounded-xl shadow p-10">
        //                 <h1 className="text-xl font-semibold text-gray-800 mb-1">
        //                     Add a Pooja Store
        //                 </h1>
        //                 <p className="text-sm text-gray-500 mb-6">
        //                     Complete the form to add the pooja store.
        //                 </p>

        //                 <Formik
        //                     initialValues={initialValues}
        //                     validationSchema={validationSchema}
        //                     onSubmit={handleSubmit}
        //                 >
        //                     {({ values, handleChange, handleBlur, setFieldValue, touched, errors }) => (
        //                         <Form>
        //                             <div className="mb-6 flex items-center justify-start gap-4">
        //                                 <h2 className="text-lg font-semibold text-gray-800">
        //                                     Pooja Items
        //                                 </h2>
        //                                 <FieldArray name="items">
        //                                     {({ push }) => (
        //                                         <Button
        //                                             variant="outlined"
        //                                             onClick={() =>
        //                                                 push({
        //                                                     name: "",
        //                                                     description: "",
        //                                                     price: "",
        //                                                     type: "",
        //                                                     duration: "",
        //                                                     images: [],
        //                                                 })
        //                                             }
        //                                             sx={{
        //                                                 color: "#D75A28",
        //                                                 borderColor: "#D75A28",
        //                                                 textTransform: "none",
        //                                                 fontWeight: 500,
        //                                             }}
        //                                         >
        //                                             ADD ANOTHER ITEM
        //                                         </Button>
        //                                     )}
        //                                 </FieldArray>
        //                             </div>

        //                             <FieldArray name="items">
        //                                 {({ remove }) =>
        //                                     values.items.map((item, index) => (
        //                                         <div key={index} className="mb-8">
        //                                             <h3 className="text-base font-semibold text-gray-800 mb-3">
        //                                                 {index + 1}. Item Details
        //                                             </h3>

        //                                             <div className="grid grid-cols-4 gap-6 mb-4">
        //                                                 <div className="col-span-1">
        //                                                     <label className="block text-sm font-medium text-gray-700 mb-1">
        //                                                         Item Name
        //                                                     </label>
        //                                                     <TextField
        //                                                         name={`items.${index}.name`}
        //                                                         variant="outlined"
        //                                                         size="small"
        //                                                         value={item.name}
        //                                                         onChange={handleChange}
        //                                                         onBlur={handleBlur}
        //                                                         className="w-full bg-gray-50"
        //                                                         error={Boolean(
        //                                                             touched.items?.[index]?.name && errors.items?.[index]?.name
        //                                                         )}
        //                                                         helperText={
        //                                                             touched.items?.[index]?.name && errors.items?.[index]?.name
        //                                                         }
        //                                                     />
        //                                                 </div>

        //                                                 <div className="col-span-2">
        //                                                     <label className="block text-sm font-medium text-gray-700 mb-1">
        //                                                         Description
        //                                                     </label>
        //                                                     <TextField
        //                                                         name={`items.${index}.description`}
        //                                                         variant="outlined"
        //                                                         size="small"
        //                                                         value={item.description}
        //                                                         onChange={handleChange}
        //                                                         onBlur={handleBlur}
        //                                                         className="w-full bg-gray-50"
        //                                                     />
        //                                                 </div>
        //                                             </div>

        //                                             <div className="grid grid-cols-12 gap-4 mb-4 items-start">
        //                                                 {/* Price - Wider */}
        //                                                 <div className="col-span-3">
        //                                                     <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
        //                                                     <TextField
        //                                                         name={`items.${index}.price`}
        //                                                         variant="outlined"
        //                                                         size="small"
        //                                                         value={item.price}
        //                                                         onChange={handleChange}
        //                                                         onBlur={handleBlur}
        //                                                         className="w-full bg-gray-50"
        //                                                         error={Boolean(touched.items?.[index]?.price && errors.items?.[index]?.price)}
        //                                                         helperText={touched.items?.[index]?.price && errors.items?.[index]?.price}
        //                                                     />
        //                                                 </div>

        //                                                 {/* Rent/Sell */}
        //                                                 <div className="col-span-3 pt-[1.9rem] pl-3">
        //                                                     <RadioGroup
        //                                                         row
        //                                                         name={`items.${index}.type`}
        //                                                         value={item.type}
        //                                                         onChange={handleChange}
        //                                                         className="flex items-center gap-4"
        //                                                     >
        //                                                         {["Rent", "Sell"].map((option) => (
        //                                                             <FormControlLabel
        //                                                                 key={option}
        //                                                                 value={option}
        //                                                                 control={
        //                                                                     <Radio
        //                                                                         size="small"
        //                                                                         sx={{
        //                                                                             color: "#D75A28",
        //                                                                             "&.Mui-checked": { color: "#D75A28" },
        //                                                                             p: 0.5,
        //                                                                         }}
        //                                                                     />
        //                                                                 }
        //                                                                 label={option}
        //                                                                 sx={{
        //                                                                     "& .MuiFormControlLabel-label": { fontSize: "0.8rem" },
        //                                                                     marginRight: "12px",
        //                                                                 }}
        //                                                             />
        //                                                         ))}
        //                                                     </RadioGroup>
        //                                                 </div>

        //                                                 {/* Duration */}
        //                                                 {item.type === "Rent" && (
        //                                                     <div className="col-span-3">
        //                                                         <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
        //                                                         <FormControl size="small" className="w-full bg-gray-50">
        //                                                             <Select
        //                                                                 name={`items.${index}.duration`}
        //                                                                 value={item.duration}
        //                                                                 onChange={handleChange}
        //                                                                 onBlur={handleBlur}
        //                                                                 displayEmpty
        //                                                             >
        //                                                                 <MenuItem value="" disabled>Select duration</MenuItem>
        //                                                                 <MenuItem value="24 hours">24 hours</MenuItem>
        //                                                                 <MenuItem value="3 days">3 days</MenuItem>
        //                                                                 <MenuItem value="1 week">1 week</MenuItem>
        //                                                             </Select>
        //                                                         </FormControl>
        //                                                     </div>

        //                                                 )}
        //                                             </div>


        //                                             {/* Image Section */}
        //                                             <div className="mb-4">
        //                                                 <label className="text-sm font-medium text-gray-800 mb-1 block">
        //                                                     Add Item Images
        //                                                 </label>

        //                                                 <div className="flex flex-wrap items-center gap-3 mb-2">
        //                                                     {item.images.map((img, i) => (
        //                                                         <img
        //                                                             key={i}
        //                                                             src={img}
        //                                                             alt="preview"
        //                                                             className="w-14 h-14 object-contain border border-gray-200 rounded"
        //                                                         />
        //                                                     ))}
        //                                                 </div>

        //                                                 <label
        //                                                     htmlFor={`upload-${index}`}
        //                                                     className="w-60 h-28 cursor-pointer bg-gray-100 rounded-md border border-dashed border-gray-300 flex flex-col justify-center items-center text-sm text-gray-700 hover:bg-gray-200 transition"
        //                                                 >
        //                                                     <Plus className="mb-1 text-[#D75A28]" />
        //                                                     <p className="text-black">
        //                                                         Drag & drop files or{" "}
        //                                                         <span className="text-[#D75A28] font-medium underline">
        //                                                             Browse
        //                                                         </span>
        //                                                     </p>
        //                                                     <p className="text-[10px] text-gray-400">
        //                                                         Supported formats: JPG / PNG
        //                                                     </p>
        //                                                     <input
        //                                                         id={`upload-${index}`}
        //                                                         type="file"
        //                                                         accept="image/*"
        //                                                         multiple
        //                                                         className="hidden"
        //                                                         onChange={(e) => {
        //                                                             const files = Array.from(e.target.files || []);
        //                                                             const urls = files.map((file) =>
        //                                                                 URL.createObjectURL(file)
        //                                                             );
        //                                                             setFieldValue(
        //                                                                 `items.${index}.images`,
        //                                                                 [...item.images, ...urls]
        //                                                             );
        //                                                         }}
        //                                                     />
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                     ))
        //                                 }
        //                             </FieldArray>

        //                             <Button
        //                                 type="submit"
        //                                 variant="contained"
        //                                 sx={{
        //                                     backgroundColor: "#D75A28",
        //                                     textTransform: "none",
        //                                     fontWeight: 500,
        //                                     px: 4,
        //                                     mt: 2,
        //                                     "&:hover": { backgroundColor: "#c95021" },
        //                                 }}
        //                             >
        //                                 SUBMIT
        //                             </Button>
        //                         </Form>
        //                     )}
        //                 </Formik>
        //             </div>
        //         </div>
        //     </div>
        // </div>
 <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 p-6 pt-4">
                    <div className="bg-white rounded-xl shadow p-10">
                        <h1 className="text-xl font-semibold text-gray-800 mb-1">
                            Add a Pooja Store
                        </h1>
                        <p className="text-sm text-gray-500 mb-6">
                            Complete the form to add the pooja store.
                        </p>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleChange, handleBlur, setFieldValue, touched, errors }) => (
                                <Form>
                                    <div className="mb-6 flex items-center justify-start gap-4">
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            Pooja Items
                                        </h2>
                                        <FieldArray name="items">
                                            {({ push }) => (
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        push({
                                                            name: "",
                                                            description: "",
                                                            price: "",
                                                            type: "",
                                                            duration: "",
                                                            images: [],
                                                        })
                                                    }
                                                    sx={{
                                                        color: "#D75A28",
                                                        borderColor: "#D75A28",
                                                        textTransform: "none",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    ADD ANOTHER ITEM
                                                </Button>
                                            )}
                                        </FieldArray>
                                    </div>

                                    <FieldArray name="items">
                                        {({ remove }) =>
                                            values.items.map((item, index) => (
                                                <div key={index} className="mb-8">
                                                    <h3 className="text-base font-semibold text-gray-800 mb-3">
                                                        {index + 1}. Item Details
                                                    </h3>

                                                    <div className="grid grid-cols-4 gap-6 mb-4">
                                                        <div className="col-span-1">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Item Name
                                                            </label>
                                                            <TextField
                                                                name={`items.${index}.name`}
                                                                variant="outlined"
                                                                size="small"
                                                                value={item.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className="w-full bg-gray-50"
                                                                error={Boolean(
                                                                    touched.items?.[index]?.name && errors.items?.[index]?.name
                                                                )}
                                                                helperText={
                                                                    touched.items?.[index]?.name && errors.items?.[index]?.name
                                                                }
                                                            />
                                                        </div>

                                                        <div className="col-span-2">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Description
                                                            </label>
                                                            <TextField
                                                                name={`items.${index}.description`}
                                                                variant="outlined"
                                                                size="small"
                                                                value={item.description}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className="w-full bg-gray-50"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-12 gap-4 mb-4 items-start">
                                                        {/* Price - Wider */}
                                                        <div className="col-span-3">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                                            <TextField
                                                                name={`items.${index}.price`}
                                                                variant="outlined"
                                                                size="small"
                                                                value={item.price}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className="w-full bg-gray-50"
                                                                error={Boolean(touched.items?.[index]?.price && errors.items?.[index]?.price)}
                                                                helperText={touched.items?.[index]?.price && errors.items?.[index]?.price}
                                                            />
                                                        </div>

                                                        {/* Rent/Sell */}
                                                        <div className="col-span-3 pt-[1.9rem] pl-3">
                                                            <RadioGroup
                                                                row
                                                                name={`items.${index}.type`}
                                                                value={item.type}
                                                                onChange={handleChange}
                                                                className="flex items-center gap-4"
                                                            >
                                                                {["Rent", "Sell"].map((option) => (
                                                                    <FormControlLabel
                                                                        key={option}
                                                                        value={option}
                                                                        control={
                                                                            <Radio
                                                                                size="small"
                                                                                sx={{
                                                                                    color: "#D75A28",
                                                                                    "&.Mui-checked": { color: "#D75A28" },
                                                                                    p: 0.5,
                                                                                }}
                                                                            />
                                                                        }
                                                                        label={option}
                                                                        sx={{
                                                                            "& .MuiFormControlLabel-label": { fontSize: "0.8rem" },
                                                                            marginRight: "12px",
                                                                        }}
                                                                    />
                                                                ))}
                                                            </RadioGroup>
                                                        </div>

                                                        {/* Duration */}
                                                        {item.type === "Rent" && (
                                                            <div className="col-span-3">
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                                                <FormControl size="small" className="w-full bg-gray-50">
                                                                    <Select
                                                                        name={`items.${index}.duration`}
                                                                        value={item.duration}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        displayEmpty
                                                                    >
                                                                        <MenuItem value="" disabled>Select duration</MenuItem>
                                                                        <MenuItem value="24 hours">24 hours</MenuItem>
                                                                        <MenuItem value="3 days">3 days</MenuItem>
                                                                        <MenuItem value="1 week">1 week</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </div>

                                                        )}
                                                    </div>


                                                    {/* Image Section */}
                                                    <div className="mb-4">
                                                        <label className="text-sm font-medium text-gray-800 mb-1 block">
                                                            Add Item Images
                                                        </label>

                                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                                            {item.images.map((img, i) => (
                                                                <img
                                                                    key={i}
                                                                    src={img}
                                                                    alt="preview"
                                                                    className="w-14 h-14 object-contain border border-gray-200 rounded"
                                                                />
                                                            ))}
                                                        </div>

                                                        <label
                                                            htmlFor={`upload-${index}`}
                                                            className="w-60 h-28 cursor-pointer bg-gray-100 rounded-md border border-dashed border-gray-300 flex flex-col justify-center items-center text-sm text-gray-700 hover:bg-gray-200 transition"
                                                        >
                                                            <Plus className="mb-1 text-[#D75A28]" />
                                                            <p className="text-black">
                                                                Drag & drop files or{" "}
                                                                <span className="text-[#D75A28] font-medium underline">
                                                                    Browse
                                                                </span>
                                                            </p>
                                                            <p className="text-[10px] text-gray-400">
                                                                Supported formats: JPG / PNG
                                                            </p>
                                                            <input
                                                                id={`upload-${index}`}
                                                                type="file"
                                                                accept="image/*"
                                                                multiple
                                                                className="hidden"
                                                                onChange={(e) => {
                                                                    const files = Array.from(e.target.files || []);
                                                                    const urls = files.map((file) =>
                                                                        URL.createObjectURL(file)
                                                                    );
                                                                    setFieldValue(
                                                                        `items.${index}.images`,
                                                                        [...item.images, ...urls]
                                                                    );
                                                                }}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </FieldArray>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#D75A28",
                                            textTransform: "none",
                                            fontWeight: 500,
                                            px: 4,
                                            mt: 2,
                                            "&:hover": { backgroundColor: "#c95021" },
                                        }}
                                    >
                                        SUBMIT
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
    );
};

export default PoojaStoreForm;
