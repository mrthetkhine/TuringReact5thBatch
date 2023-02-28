import React from 'react';
import $ from 'jquery';
//import 'jquery-datepicker/lib/'
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja';
datepickerFactory($);
datepickerJAFactory($);

export default class DatePicker extends React.Component
{
    componentDidMount() {
        $.datepicker.setDefaults($.datepicker.regional['en-GB']);
        this.$el = $(this.el);
        this.$el.datepicker();

    }

    componentWillUnmount() {
        this.$el.datepicker('destroy');
    }

    render() {

        return (<div>
            <input type={"text"}
                   ref={el => this.el = el}/>
        </div>);
    }
}