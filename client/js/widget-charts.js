/*
Template Name: Material Pro Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    // User analytics
    // ============================================================== 
    new Chartist.Line('.client-temperature-chart', {
        labels: ['10 jan', '15 jan', '20 jan', '25 jan', '30 jan', '05 Feb', '10 Feb']
        , series: [
        [0, 4, 3.5, 0, 23, 1, 9]

      ]
    }, {
        high: 25
        , low: 0
        , showArea: true
        , lineSmooth: Chartist.Interpolation.simple({
            divisor: 10
        })
        , fullWidth: true
        , chartPadding: 0
        , plugins: [
        Chartist.plugins.tooltip()
      ], // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisY: {
            onlyInteger: true
            , offset: 20
            , labelInterpolationFnc: function (value) {
                return (value / 1) + 'k';
            }
        }
    });



    // ============================================================== 
    // User analytics
    // ============================================================== 
    new Chartist.Line('.client-weight-chart', {
        labels: ['10 jan', '15 jan', '20 jan', '25 jan', '30 jan', '05 Feb', '10 Feb']
        , series: [
        [12, 2, 3.5, 0, 13, 1, 4]

      ]
    }, {
        high: 25
        , low: 0
        , showArea: true
        , lineSmooth: Chartist.Interpolation.simple({
            divisor: 10
        })
        , fullWidth: true
        , chartPadding: 0
        , plugins: [
        Chartist.plugins.tooltip()
      ], // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisY: {
            onlyInteger: true
            , offset: 20
            , labelInterpolationFnc: function (value) {
                return (value / 1) + 'k';
            }
        }
    });




    // ============================================================== 
    // User analytics
    // ============================================================== 
    new Chartist.Line('.client-blood-pressure-chart', {
        labels: ['10 jan', '15 jan', '20 jan', '25 jan', '30 jan', '05 Feb', '10 Feb']
        , series: [
        [5, 6, 7.5, 0, 13, 17, 25]

      ]
    }, {
        high: 25
        , low: 0
        , showArea: true
        , lineSmooth: Chartist.Interpolation.simple({
            divisor: 10
        })
        , fullWidth: true
        , chartPadding: 0
        , plugins: [
        Chartist.plugins.tooltip()
      ], // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisY: {
            onlyInteger: true
            , offset: 20
            , labelInterpolationFnc: function (value) {
                return (value / 1) + 'k';
            }
        }
    });
});