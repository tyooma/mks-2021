import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createEvent } from '../../store/actions/eventActions';
import { connect } from 'react-redux';
import { app } from '../../config/fbConfig';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    image: yup
        .mixed()
        .test('filesize', "The file is too large", (value) => {
            console.log('VALUE', value)
            return value && value[0].size < 1000000;
        }),
})

function AddEventForm(props) {


    const { register, handleSubmit, control, errors } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        const file = data.image[0]
        console.log('DATAIMAGE', data.image[0].size)
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(data.image[0].name);
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()


        const eventData = {
            title: data.title,
            description: data.description,
            eventDate: data.date.toDateString(),
            id: Date.now(),
            image: fileUrl
        }
        props.createEvent(eventData)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" placeholder="Title" ref={register} required />
            <input type="text" name="description" placeholder="Description" ref={register} required />
            <Controller
                name="date"
                control={control}
                render={({ onChange, value }) => (
                    <DatePicker
                        required
                        selected={value}
                        onChange={onChange}
                    />
                )}
            />
            <input type="file" name="image" ref={register} required />
            {errors.image && <p>{errors.image.message}</p>}
            <input type="submit" />
        </form>

    )

}


const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(AddEventForm);







