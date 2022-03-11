import React, { Component } from 'react'
import Counters from '../Counters'
import Form from '../Form'
import Slider from '../Slider'

export default class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <section className='bg-gray py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
}
