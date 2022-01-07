# useForm

Ejemplo:
```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [values, handleInputChange, handleReset] = useForm(initialForm);
```