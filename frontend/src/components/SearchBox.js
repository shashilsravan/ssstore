import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SearchBox({ history, widthh }) {

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()){
            history.push(`/search/${keyword}`)
        }
        else{
            history.push('/allProducts')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <div className='row' style={{marginLeft: -1}}>
                <div className='col-9'>
                    <Form.Control  type="text" name='q'
                    onChange={(e) => setKeyword(e.target.value)} 
                    placeholder="Hunt for products..." className="ml-sm-5" />
                </div>
                <div className='col-2 ml-1'>
                    <Button type="submit" variant="outline-success" className='pb-1 float-right'>
                        <i className="fa fa-search"></i>
                    </Button>
                </div>
            </div>
        </Form>
    )
}
