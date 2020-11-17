<template>
  <section class="dashboard-principal">
    <h1>Dashboard principal</h1>

    <div class="row">
      <div class="col-md-12">
        <div id="chartdiv"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="chartdiv2"></div>
      </div>
    </div>
  </section>
</template>
<script>

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  name: "",
  data(){
    return{
      value: '100'
    }
  },
  mounted() {
    this.grafica1();
    this.grafica2();
  },
  methods: {
    grafica2(){
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      let chart = am4core.create("chartdiv2", am4charts.PieChart);

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";

      // Let's cut a hole in our Pie chart the size of 30% the radius
      chart.innerRadius = am4core.percent(30);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

      pieSeries.alignLabels = false;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.radius = 3;
      pieSeries.labels.template.padding(0,0,0,0);

      pieSeries.ticks.template.disabled = true;

      // Create a base filter effect (as if it's not there) for the hover to return to
      let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
      shadow.opacity = 0;

      // Create hover state
      let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;

      // Add a legend
      chart.legend = new am4charts.Legend();

      chart.data = [{
        "country": "Lithuania",
        "litres": 501.9
      },{
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }];
    },
    grafica1() {

      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.data = [{
        "country": "USA",
        "visits": 2025
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }, {
        "country": "India",
        "visits": 984
      }, {
        "country": "Spain",
        "visits": 711
      }, {
        "country": "Netherlands",
        "visits": 665
      }, {
        "country": "Russia",
        "visits": 580
      }, {
        "country": "South Korea",
        "visits": 443
      }, {
        "country": "Canada",
        "visits": 441
      }];

      chart.padding(40, 40, 40, 40);

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.minGridDistance = 60;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.extraMax = 0.1;
      //valueAxis.rangeChangeEasing = am4core.ease.linear;
      //valueAxis.rangeChangeDuration = 1500;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "country";
      series.dataFields.valueY = "visits";
      series.tooltipText = "{valueY.value}"
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.cornerRadiusTopLeft = 10;
      //series.interpolationDuration = 1500;
      //series.interpolationEasing = am4core.ease.linear;
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.verticalCenter = "bottom";
      labelBullet.label.dy = -10;
      labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

      chart.zoomOutButton.disabled = true;

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      setInterval(function () {
        am4core.array.each(chart.data, function (item) {
          item.visits += Math.round(Math.random() * 200 - 100);
          item.visits = Math.abs(item.visits);
        })
        chart.invalidateRawData();
      }, 2000)

      categoryAxis.sortBySeries = series;
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard-principal{
  #chartdiv{
    height: 500px !important;
  }
  #chartdiv2{
    height: 500px !important;
  }
}
</style>
