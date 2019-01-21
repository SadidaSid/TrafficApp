# TrafficApp

Ionic4 App, Binge API, Service Provider, Ionic Native Geoencoder API

This App runs only when installed on device not on browser because Native Geoencoder API is supported only on device and not by browser. 

This App used Ionic 4 NativeGeocoder API and provider service to fetch Real time traffic data provided by BING Traffic API. The App first calculated a standard bounded area based on the location provided(entered by user) and it then provides the following information about all the real time traffic incidences in that bounded area .
1. start coordinate, end coordinate
2.start date and end date
3. location address of incidence
4. road blocked or not
5. Detour
6. Severity level of incidence
7.Type of the incidence( Accident, Congestion,Disabled,Vehicle, MassTransit, Miscellaneous, OtherNews, PlannedEvent, RoadHazard, Construction, Alert or Weather).

