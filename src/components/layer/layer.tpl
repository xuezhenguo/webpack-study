<div class="layer">
<img src="${ require('../../assets/3.jpg') }" />
    <div>
        this is a <%= name%>!
    </div>
</div>
<% for (var i=0;i<arr.length;i++){%>
    <%= arr[i] %>
<% } %>