<template>
  <div class="uiuxDesignThinking">
    <div class="container">
      <div class="row ui_ux-design">
        <div
          class="cardIconAlign"
          :class="{'active' :cardActive === 1}"
          @mouseover="activeTheCardOnHover(1)"
        >
          <div class="uiuxAlignContent right">
            <div class="leftSideContent">
              <h3>Empathize</h3>
              <p>Design and user experience helps gain trust and ensures user retention which is a necessary part of our evolving digital landscape.</p>
            </div>
            <div class="rightSideImage">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns:x="&ns_extend;"
                xmlns:i="&ns_ai;"
                xmlns:graph="&ns_graphs;"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="150px"
                height="150px"
                viewBox="0 0 150 150"
                enable-background="new 0 0 150 150"
                xml:space="preserve"
              >
                <metadata>
                  <sfw xmlns="&ns_sfw;">
                    <slices></slices>
                    <sliceSourceBounds
                      width="271.988"
                      height="283.989"
                      y="-294.495"
                      x="16.506"
                      bottomLeftOrigin="true"
                    ></sliceSourceBounds>
                  </sfw>
                </metadata>
                <path
                  class="bg"
                  fill="#E1E6F0"
                  d="M16.71,91.007c1.255-11.557,1.521-23.137,0.796-34.741c-0.724-11.604,4.166-19.745,14.669-24.421
                                S52.708,21.61,62.262,15.173s18.955-6.215,28.204,0.665c9.248,6.88,19.012,12.903,29.289,18.069
                                c10.278,5.167,14.79,13.528,13.534,25.086c-1.255,11.557-1.521,23.137-0.796,34.741c0.724,11.604-4.166,19.744-14.669,24.421
                                c-10.504,4.677-20.532,10.234-30.086,16.672s-18.955,6.216-28.204-0.664s-19.012-12.903-29.29-18.07
                                C19.967,110.927,15.456,102.564,16.71,91.007z"
                ></path>
                <path
                  class="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#C8D1E2"
                  d="M83.089,92.706c-7.058-0.4-12.731-3.59-16.88-9.496
                                c-5.262-7.491-5.726-15.673-1.34-23.665c3.881-7.07,10.023-10.999,18.272-11.69c0.018,0.319,0.032,0.625,0.041,0.931
                                c0.01,0.372,0.01,0.743,0.008,1.145c-6.684,0.664-11.906,3.681-15.536,8.981c-2.684,3.919-3.816,8.428-3.366,13.401
                                c0.747,8.25,6.846,16.968,18.801,18.388V92.706z M83.254,81.469c-0.17-0.212-1.222-0.572-2.24-0.92
                                c-4.929-1.686-8.03-6.781-7.215-11.853c0.828-5.154,5.173-9.046,10.331-9.254c0.143-0.005,0.285-0.008,0.427-0.008
                                c5.043,0,9.49,3.555,10.576,8.454c0.064,0.292,0.123,0.584,0.18,0.877h1.98c-0.246-2.777-1.473-5.406-3.531-7.512
                                c-2.435-2.491-5.779-3.92-9.211-3.92c-3.496,0.01-6.934,1.524-9.431,4.155c-2.394,2.521-3.675,5.836-3.516,9.093
                                c0.33,6.696,5.594,12.36,11.532,12.451C83.255,82.275,83.33,81.646,83.254,81.469z M83.026,102.144v-1.758
                                c-16.791-2.251-26.399-11.893-28.585-28.681h-1.734c0.048,7.459,3.208,14.968,8.787,20.786c5.884,6.135,13.655,9.653,21.323,9.653
                                C82.886,102.145,82.956,102.145,83.026,102.144z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="centerBottomContent">
          <div class="centerImg">
            <img
              class="imageRotateAnimation"
              src="@/assets/images/center.png"
              :class="{'one' : cardActive === 1 , 'two' :cardActive === 2 ,  'three' :cardActive === 3 }"
              alt="UIUX journey"
              style="width: 100%;"
            >
          </div>
        </div>
        <div
          class="cardIconAlign"
          :class="{'active' :cardActive === 2}"
          @mouseover="activeTheCardOnHover(2) "
        >
          <div class="uiuxAlignContent left">
            <div class="rightSideImage">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns:x="&ns_extend;"
                xmlns:i="&ns_ai;"
                xmlns:graph="&ns_graphs;"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="150px"
                height="150px"
                viewBox="0 0 150 150"
                enable-background="new 0 0 150 150"
                xml:space="preserve"
              >
                <metadata>
                  <sfw xmlns="&ns_sfw;">
                    <slices></slices>
                    <sliceSourceBounds
                      width="271.988"
                      height="283.989"
                      y="-294.495"
                      x="16.506"
                      bottomLeftOrigin="true"
                    ></sliceSourceBounds>
                  </sfw>
                </metadata>
                <path
                  class="bg"
                  fill="#E1E6F0"
                  d="M16.71,91.008c1.256-11.557,1.521-23.138,0.797-34.741s4.166-19.744,14.67-24.422
                                C42.68,27.169,52.708,21.61,62.263,15.173c9.554-6.437,18.954-6.215,28.203,0.665c9.248,6.88,19.012,12.903,29.289,18.069
                                c10.278,5.166,14.79,13.528,13.534,25.086c-1.255,11.557-1.521,23.137-0.796,34.741c0.724,11.604-4.166,19.744-14.669,24.421
                                c-10.504,4.678-20.532,10.234-30.086,16.672s-18.955,6.216-28.204-0.664c-9.248-6.88-19.012-12.903-29.289-18.07
                                C19.967,110.927,15.457,102.565,16.71,91.008z"
                ></path>
                <path
                  class="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#C8D1E2"
                  d="M53.268,81.373V53.209h43.453v9.156h-24.67v19.008H53.268z
                                M54.961,79.792h15.4V60.69h24.676v-5.782H54.961V79.792z M53.238,96.791v-9.246h24.705v-18.98h18.818v28.227H53.238z M54.957,95.07
                                h40.08V70.186h-15.4v19.102h-24.68V95.07z"
                ></path>
              </svg>
            </div>
            <div class="leftSideContent">
              <h3>Prototype</h3>
              <p>Prototype fidelities provide incredible realism to designs, and scale presentation, precision, interactivity and evolution.</p>
            </div>
          </div>
        </div>

        <div
          class="uiuxBottomAlignCenter"
          :class="{'active' :cardActive === 3}"
          @mouseover="activeTheCardOnHover(3) "
        >
          <div class="uiuxBottomContentAlign">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns:x="&ns_extend;"
              xmlns:i="&ns_ai;"
              xmlns:graph="&ns_graphs;"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="150px"
              height="150px"
              viewBox="0 0 150 150"
              enable-background="new 0 0 150 150"
              xml:space="preserve"
            >
              <metadata>
                <sfw xmlns="&ns_sfw;">
                  <slices></slices>
                  <sliceSourceBounds
                    width="271.988"
                    height="283.989"
                    y="-294.495"
                    x="16.506"
                    bottomLeftOrigin="true"
                  ></sliceSourceBounds>
                </sfw>
              </metadata>
              <path
                class="bg"
                fill="#E1E6F0"
                d="M16.71,91.007c1.256-11.557,1.521-23.137,0.797-34.741c-0.725-11.604,4.166-19.745,14.67-24.421
                            C42.68,27.168,52.708,21.61,62.263,15.173c9.554-6.437,18.954-6.215,28.203,0.665c9.248,6.88,19.012,12.903,29.289,18.069
                            c10.278,5.167,14.79,13.528,13.534,25.086c-1.255,11.557-1.521,23.137-0.796,34.741c0.724,11.604-4.166,19.744-14.669,24.421
                            c-10.504,4.677-20.532,10.234-30.086,16.672s-18.955,6.216-28.204-0.664c-9.248-6.88-19.012-12.903-29.289-18.07
                            C19.967,110.927,15.456,102.564,16.71,91.007z"
              ></path>
              <path
                class="icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#C8D1E2"
                d="M75.054,99.245c-0.341,0-0.63-0.074-0.767-0.147
                            c-2.125-1.144-4.262-2.368-6.327-3.552c-1.677-0.961-3.411-1.954-5.139-2.904c-0.602-0.331-0.73-0.568-0.726-1.337
                            c0.049-7.954,0.048-15.324-0.003-22.531c-0.006-0.843,0.152-1.136,0.807-1.494c3.519-1.931,7.214-4.038,11.297-6.443
                            c0.363-0.214,0.628-0.313,0.835-0.313c0.067,0,0.273,0,0.688,0.247c3.533,2.11,7.283,4.257,11.465,6.564
                            c0.596,0.329,0.73,0.577,0.721,1.331c-0.024,1.786-0.022,3.599-0.02,5.351c0.004,2.432,0.008,4.946-0.062,7.409
                            c-0.01,0.336-0.387,0.988-0.673,1.162c-3.612,2.196-7.497,4.423-11.549,6.619c-0.094,0.051-0.321,0.105-0.6,0.105
                            c-0.277,0-0.506-0.054-0.611-0.106c-1.922-0.978-2.861-1.473-3.205-2.039c-0.35-0.578-0.35-1.714-0.35-3.775v-0.071
                            c0-0.913,0.006-1.827,0.012-2.741c0.015-2.236,0.03-4.549-0.047-6.832c-0.035-1.04,0.233-1.254,0.813-1.467
                            c0.374-0.138,0.673-0.31,0.917-0.526c0.845-0.747,1.631-1.11,2.405-1.11c0.569,0,1.168,0.196,1.811,0.597
                            c-3.526,1.762-4.864,5.021-4.089,9.908c0.092,0.571,0.068,1.203,0.044,1.872c-0.02,0.535-0.04,1.09-0.004,1.66
                            c0.114,1.78,1.228,2.411,2.146,2.411c0.453,0,0.936-0.141,1.431-0.419c2.662-1.492,5.508-3.103,8.286-4.756
                            c0.62-0.369,0.912-1.007,1.126-1.473c0.04-0.089,0.08-0.177,0.121-0.259c0.22-0.431,0.18-0.842,0.156-1.087
                            c-0.004-0.029-0.007-0.059-0.008-0.087l-0.162-10.198l-0.596-0.346c-0.729-0.423-1.458-0.848-2.186-1.273
                            c-2.101-1.229-4.273-2.498-6.457-3.681c-0.535-0.289-1.131-0.35-1.537-0.35c-0.587,0-1.149,0.127-1.586,0.356
                            c-2.681,1.416-5.309,2.918-7.81,4.464c-0.85,0.525-1.525,1.73-1.537,2.744c-0.073,6.592-0.071,12.64,0.008,18.488
                            c0.016,1.134,0.871,2.341,1.69,2.854c2.601,1.626,5.048,3.021,7.481,4.264c0.488,0.25,1.115,0.388,1.768,0.388
                            c0.459,0,1.128-0.068,1.719-0.395c5.398-2.978,10.795-6.061,16.041-9.163c0.941-0.556,1.722-1.932,1.739-3.065
                            c0.092-6.231,0.091-12.318-0.004-18.09c-0.02-1.188-0.836-2.63-1.82-3.214c-5.188-3.083-10.525-6.135-15.865-9.069
                            c-0.493-0.271-1.146-0.42-1.838-0.42c-0.699,0-1.358,0.15-1.858,0.425c-2.918,1.604-5.853,3.28-8.691,4.901
                            c-2.295,1.312-4.668,2.668-7.014,3.974c-1.447,0.806-2.062,1.896-2.051,3.645c0.036,6.106,0.025,12.316,0.015,18.322l-0.006,3.879
                            c-1.611-0.521-1.907-1.385-1.907-3.228c0-1.811,0.002-3.621,0.004-5.431c0.005-5.271,0.011-10.72-0.031-16.081
                            c-0.007-0.826,0.146-1.103,0.819-1.479c3.02-1.692,6.074-3.435,9.029-5.119c3.621-2.064,7.366-4.2,11.068-6.257
                            c0.063-0.035,0.269-0.102,0.594-0.102c0.321,0,0.59,0.067,0.703,0.131c3.815,2.121,7.675,4.322,11.407,6.45
                            c2.844,1.622,5.784,3.299,8.688,4.931c0.632,0.354,0.767,0.587,0.762,1.311c-0.023,3.287-0.024,6.628-0.026,9.858
                            c-0.002,4.28-0.005,8.707-0.057,13.056c-0.004,0.318-0.376,0.971-0.642,1.127c-6.654,3.902-13.455,7.784-20.212,11.537
                            C75.533,99.191,75.335,99.245,75.054,99.245z"
              ></path>
            </svg>

            <div class="leftSideContent">
              <h3>Implement</h3>
              <p>Potent and strategically grounded creativity applied to business, that provides integrated and comprehensive digital experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row ui_ux_design-mobile">
        <div class="design-container">
          <div class="wrapper">
            <div class="leftSideContent">
              <h3>Empathize</h3>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns:x="&ns_extend;"
                xmlns:i="&ns_ai;"
                xmlns:graph="&ns_graphs;"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="150px"
                height="150px"
                viewBox="0 0 150 150"
                enable-background="new 0 0 150 150"
                xml:space="preserve"
              >
                <metadata>
                  <sfw xmlns="&ns_sfw;">
                    <slices></slices>
                    <sliceSourceBounds
                      width="271.988"
                      height="283.989"
                      y="-294.495"
                      x="16.506"
                      bottomLeftOrigin="true"
                    ></sliceSourceBounds>
                  </sfw>
                </metadata>
                <path
                  class="bg"
                  fill="#E1E6F0"
                  d="M16.71,91.007c1.255-11.557,1.521-23.137,0.796-34.741c-0.724-11.604,4.166-19.745,14.669-24.421
                                S52.708,21.61,62.262,15.173s18.955-6.215,28.204,0.665c9.248,6.88,19.012,12.903,29.289,18.069
                                c10.278,5.167,14.79,13.528,13.534,25.086c-1.255,11.557-1.521,23.137-0.796,34.741c0.724,11.604-4.166,19.744-14.669,24.421
                                c-10.504,4.677-20.532,10.234-30.086,16.672s-18.955,6.216-28.204-0.664s-19.012-12.903-29.29-18.07
                                C19.967,110.927,15.456,102.564,16.71,91.007z"
                ></path>
                <path
                  class="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#C8D1E2"
                  d="M83.089,92.706c-7.058-0.4-12.731-3.59-16.88-9.496
                                c-5.262-7.491-5.726-15.673-1.34-23.665c3.881-7.07,10.023-10.999,18.272-11.69c0.018,0.319,0.032,0.625,0.041,0.931
                                c0.01,0.372,0.01,0.743,0.008,1.145c-6.684,0.664-11.906,3.681-15.536,8.981c-2.684,3.919-3.816,8.428-3.366,13.401
                                c0.747,8.25,6.846,16.968,18.801,18.388V92.706z M83.254,81.469c-0.17-0.212-1.222-0.572-2.24-0.92
                                c-4.929-1.686-8.03-6.781-7.215-11.853c0.828-5.154,5.173-9.046,10.331-9.254c0.143-0.005,0.285-0.008,0.427-0.008
                                c5.043,0,9.49,3.555,10.576,8.454c0.064,0.292,0.123,0.584,0.18,0.877h1.98c-0.246-2.777-1.473-5.406-3.531-7.512
                                c-2.435-2.491-5.779-3.92-9.211-3.92c-3.496,0.01-6.934,1.524-9.431,4.155c-2.394,2.521-3.675,5.836-3.516,9.093
                                c0.33,6.696,5.594,12.36,11.532,12.451C83.255,82.275,83.33,81.646,83.254,81.469z M83.026,102.144v-1.758
                                c-16.791-2.251-26.399-11.893-28.585-28.681h-1.734c0.048,7.459,3.208,14.968,8.787,20.786c5.884,6.135,13.655,9.653,21.323,9.653
                                C82.886,102.145,82.956,102.145,83.026,102.144z"
                ></path>
              </svg>
              <p>Design and user experience helps gain trust and ensures user retention which is a necessary part of our evolving digital landscape.</p>
            </div>
          </div>
          <div class="wrapper">
            <div class="leftSideContent">
              <h3>Prototype</h3>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns:x="&ns_extend;"
                xmlns:i="&ns_ai;"
                xmlns:graph="&ns_graphs;"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="150px"
                height="150px"
                viewBox="0 0 150 150"
                enable-background="new 0 0 150 150"
                xml:space="preserve"
              >
                <metadata>
                  <sfw xmlns="&ns_sfw;">
                    <slices></slices>
                    <sliceSourceBounds
                      width="271.988"
                      height="283.989"
                      y="-294.495"
                      x="16.506"
                      bottomLeftOrigin="true"
                    ></sliceSourceBounds>
                  </sfw>
                </metadata>
                <path
                  class="bg"
                  fill="#E1E6F0"
                  d="M16.71,91.008c1.256-11.557,1.521-23.138,0.797-34.741s4.166-19.744,14.67-24.422
                                C42.68,27.169,52.708,21.61,62.263,15.173c9.554-6.437,18.954-6.215,28.203,0.665c9.248,6.88,19.012,12.903,29.289,18.069
                                c10.278,5.166,14.79,13.528,13.534,25.086c-1.255,11.557-1.521,23.137-0.796,34.741c0.724,11.604-4.166,19.744-14.669,24.421
                                c-10.504,4.678-20.532,10.234-30.086,16.672s-18.955,6.216-28.204-0.664c-9.248-6.88-19.012-12.903-29.289-18.07
                                C19.967,110.927,15.457,102.565,16.71,91.008z"
                ></path>
                <path
                  class="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#C8D1E2"
                  d="M53.268,81.373V53.209h43.453v9.156h-24.67v19.008H53.268z
                                M54.961,79.792h15.4V60.69h24.676v-5.782H54.961V79.792z M53.238,96.791v-9.246h24.705v-18.98h18.818v28.227H53.238z M54.957,95.07
                                h40.08V70.186h-15.4v19.102h-24.68V95.07z"
                ></path>
              </svg>
              <p>Prototype fidelities provide incredible realism to designs, and scale presentation, precision, interactivity and evolution.</p>
            </div>
          </div>
          <div class="wrapper">
            <div class="leftSideContent">
              <h3>Implement</h3>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns:x="&ns_extend;"
                xmlns:i="&ns_ai;"
                xmlns:graph="&ns_graphs;"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="150px"
                height="150px"
                viewBox="0 0 150 150"
                enable-background="new 0 0 150 150"
                xml:space="preserve"
              >
                <metadata>
                  <sfw xmlns="&ns_sfw;">
                    <slices></slices>
                    <sliceSourceBounds
                      width="271.988"
                      height="283.989"
                      y="-294.495"
                      x="16.506"
                      bottomLeftOrigin="true"
                    ></sliceSourceBounds>
                  </sfw>
                </metadata>
                <path
                  class="bg"
                  fill="#E1E6F0"
                  d="M16.71,91.007c1.256-11.557,1.521-23.137,0.797-34.741c-0.725-11.604,4.166-19.745,14.67-24.421
                                C42.68,27.168,52.708,21.61,62.263,15.173c9.554-6.437,18.954-6.215,28.203,0.665c9.248,6.88,19.012,12.903,29.289,18.069
                                c10.278,5.167,14.79,13.528,13.534,25.086c-1.255,11.557-1.521,23.137-0.796,34.741c0.724,11.604-4.166,19.744-14.669,24.421
                                c-10.504,4.677-20.532,10.234-30.086,16.672s-18.955,6.216-28.204-0.664c-9.248-6.88-19.012-12.903-29.289-18.07
                                C19.967,110.927,15.456,102.564,16.71,91.007z"
                ></path>
                <path
                  class="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#C8D1E2"
                  d="M75.054,99.245c-0.341,0-0.63-0.074-0.767-0.147
                                c-2.125-1.144-4.262-2.368-6.327-3.552c-1.677-0.961-3.411-1.954-5.139-2.904c-0.602-0.331-0.73-0.568-0.726-1.337
                                c0.049-7.954,0.048-15.324-0.003-22.531c-0.006-0.843,0.152-1.136,0.807-1.494c3.519-1.931,7.214-4.038,11.297-6.443
                                c0.363-0.214,0.628-0.313,0.835-0.313c0.067,0,0.273,0,0.688,0.247c3.533,2.11,7.283,4.257,11.465,6.564
                                c0.596,0.329,0.73,0.577,0.721,1.331c-0.024,1.786-0.022,3.599-0.02,5.351c0.004,2.432,0.008,4.946-0.062,7.409
                                c-0.01,0.336-0.387,0.988-0.673,1.162c-3.612,2.196-7.497,4.423-11.549,6.619c-0.094,0.051-0.321,0.105-0.6,0.105
                                c-0.277,0-0.506-0.054-0.611-0.106c-1.922-0.978-2.861-1.473-3.205-2.039c-0.35-0.578-0.35-1.714-0.35-3.775v-0.071
                                c0-0.913,0.006-1.827,0.012-2.741c0.015-2.236,0.03-4.549-0.047-6.832c-0.035-1.04,0.233-1.254,0.813-1.467
                                c0.374-0.138,0.673-0.31,0.917-0.526c0.845-0.747,1.631-1.11,2.405-1.11c0.569,0,1.168,0.196,1.811,0.597
                                c-3.526,1.762-4.864,5.021-4.089,9.908c0.092,0.571,0.068,1.203,0.044,1.872c-0.02,0.535-0.04,1.09-0.004,1.66
                                c0.114,1.78,1.228,2.411,2.146,2.411c0.453,0,0.936-0.141,1.431-0.419c2.662-1.492,5.508-3.103,8.286-4.756
                                c0.62-0.369,0.912-1.007,1.126-1.473c0.04-0.089,0.08-0.177,0.121-0.259c0.22-0.431,0.18-0.842,0.156-1.087
                                c-0.004-0.029-0.007-0.059-0.008-0.087l-0.162-10.198l-0.596-0.346c-0.729-0.423-1.458-0.848-2.186-1.273
                                c-2.101-1.229-4.273-2.498-6.457-3.681c-0.535-0.289-1.131-0.35-1.537-0.35c-0.587,0-1.149,0.127-1.586,0.356
                                c-2.681,1.416-5.309,2.918-7.81,4.464c-0.85,0.525-1.525,1.73-1.537,2.744c-0.073,6.592-0.071,12.64,0.008,18.488
                                c0.016,1.134,0.871,2.341,1.69,2.854c2.601,1.626,5.048,3.021,7.481,4.264c0.488,0.25,1.115,0.388,1.768,0.388
                                c0.459,0,1.128-0.068,1.719-0.395c5.398-2.978,10.795-6.061,16.041-9.163c0.941-0.556,1.722-1.932,1.739-3.065
                                c0.092-6.231,0.091-12.318-0.004-18.09c-0.02-1.188-0.836-2.63-1.82-3.214c-5.188-3.083-10.525-6.135-15.865-9.069
                                c-0.493-0.271-1.146-0.42-1.838-0.42c-0.699,0-1.358,0.15-1.858,0.425c-2.918,1.604-5.853,3.28-8.691,4.901
                                c-2.295,1.312-4.668,2.668-7.014,3.974c-1.447,0.806-2.062,1.896-2.051,3.645c0.036,6.106,0.025,12.316,0.015,18.322l-0.006,3.879
                                c-1.611-0.521-1.907-1.385-1.907-3.228c0-1.811,0.002-3.621,0.004-5.431c0.005-5.271,0.011-10.72-0.031-16.081
                                c-0.007-0.826,0.146-1.103,0.819-1.479c3.02-1.692,6.074-3.435,9.029-5.119c3.621-2.064,7.366-4.2,11.068-6.257
                                c0.063-0.035,0.269-0.102,0.594-0.102c0.321,0,0.59,0.067,0.703,0.131c3.815,2.121,7.675,4.322,11.407,6.45
                                c2.844,1.622,5.784,3.299,8.688,4.931c0.632,0.354,0.767,0.587,0.762,1.311c-0.023,3.287-0.024,6.628-0.026,9.858
                                c-0.002,4.28-0.005,8.707-0.057,13.056c-0.004,0.318-0.376,0.971-0.642,1.127c-6.654,3.902-13.455,7.784-20.212,11.537
                                C75.533,99.191,75.335,99.245,75.054,99.245z"
                ></path>
              </svg>
              <p>Potent and strategically grounded creativity applied to business, that provides integrated and comprehensive digital experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorRed: 'red',
      cardActive: 0,
      degree: 0
    }
  },

  methods: {
    activeTheCardOnHover(a) {
      this.cardActive = a
    }
  }
}
</script>


<style scope>
.uiuxAlignContent.right {
  text-align: right;
}
.uiuxAlignContent {
  display: flex;
}
.uiuxAlignContent.left {
  text-align: left;
}
.uiuxAlignContent.right .leftSideContent {
  padding-right: 15px;
}
.rightSideImage img {
  width: 100px;
  margin: 0 10px 0;
}
.uiuxAlignContent.left .leftSideContent {
  padding-left: 15px;
}
.cardIconAlign {
  float: left;
  width: 41%;
  padding-top: 35px;
}
.centerBottomContent {
  float: left;
  width: 18%;
}
.uiuxBottomContentAlign img {
  width: 100px;
}
.uiuxBottomAlignCenter {
  width: 100%;
}
.uiuxBottomContentAlign {
  max-width: 300px;
  margin: 0 auto;
}
.cardIconAlign.active h3 {
  color: #0c3473;
}
.uiuxBottomAlignCenter.active h3 {
  color: #0c3473;
}

img.imageRotateAnimation.two {
  transform: rotate(180deg);
}

img.imageRotateAnimation.three {
  transform: rotate(269deg);
}
img.imageRotateAnimation {
  transform: rotate(0deg);
  transition: all 1s;
}
svg path {
  transition: all 0.5s;
}
.active svg path.bg {
  fill: #243871;
}
.active svg path.icon {
  fill: #fff;
  opacity: 1;
}
.ui_ux_design-mobile {
  display: none !important;
}
.ui_ux_design-mobile svg path.bg {
  fill: #243871;
}
.ui_ux_design-mobile svg path.icon {
  fill: #fff;
  /* opacity:1; */
}

p {
  font-size: 1rem;
}

@media (max-width: 767px) {
  .centerBottomContent {
    float: left;
    width: 18%;
    display: none;
  }
}
@media (max-width: 575px) {
  .ui_ux-design {
    display: none;
  }
  .ui_ux_design-mobile {
    display: block !important;
  }
  .design-container {
    padding: 20px;
  }
  .ui_ux_design-mobile .design-container .wrapper .leftSideContent h3 {
    color: #0c3473;
  }

  .ui_ux_design-mobile .design-container .wrapper .leftSideContent {
    margin-bottom: 2rem;
  }
}
</style>
