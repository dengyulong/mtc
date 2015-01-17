<%@page import="com.mycompany.iread.entity.Circle"%>
<%@ include file="/taglibs.jsp"%>
<tr>
	<td><select name="<c:out value="${param.leftId}"/>"
		multiple="multiple"
		onDblClick="moveSelectedOptions(this,document.getElementById('<c:out value="${param.rightId}"/>'),true)"
		id="<c:out value="${param.leftId}"/>" size="15">
			<c:if test="${not empty leftList}">
                <c:forEach var="list" items="${leftList}" varStatus="status">
                    <option value="<c:out value="${list.value}"/>">
                        <c:out value="${list.label}" escapeXml="false" />
                    </option>
                </c:forEach>
            </c:if>
	</select></td>
	<td class="moveOptions">
	    <button name="moveLeft"
            id="moveLeft<c:out value="${param.listCount}"/>" type="button"
            onclick="moveSelectedOptions(document.getElementById('<c:out value="${param.rightId}"/>'),document.getElementById('<c:out value="${param.leftId}"/>'),true)">
            &lt;&lt;</button>
        <br />
        <button name="moveAllLeft"
            id="moveAllLeft<c:out value="${param.listCount}"/>" type="button"
            onclick="moveAllOptions(document.getElementById('<c:out value="${param.rightId}"/>'),document.getElementById('<c:out value="${param.leftId}"/>'),true)">
            All &lt;&lt;</button>
            <br/>
		<button name="moveRight"
			id="moveRight<c:out value="${param.listCount}"/>" type="button"
			onclick="moveSelectedOptions(document.getElementById('<c:out value="${param.leftId}"/>'),document.getElementById('<c:out value="${param.rightId}"/>'),true)">
			&gt;&gt;</button>
		<br />
		<button name="moveAllRight"
			id="moveAllRight<c:out value="${param.listCount}"/>" type="button"
			onclick="moveAllOptions(document.getElementById('<c:out value="${param.leftId}"/>'),document.getElementById('<c:out value="${param.rightId}"/>'),true)">
			All &gt;&gt;</button>
		</td>
	<td><select name="<c:out value="${param.rightId}"/>"
		multiple="multiple" id="<c:out value="${param.rightId}"/>" size="15">
		    <c:if test="${not empty rightList}">
            <% java.util.List chosen = (java.util.List) request.getAttribute("leftList"); %>
                <c:forEach var="list" items="${rightList}" varStatus="status">
                <%
                Circle item = (Circle)pageContext.getAttribute("list");
                                if (!chosen.contains(item) && item.getActive() && !item.getIsClub()) {
                    %>
                    <option value="<c:out value="${list.value}"/>">
                        <c:out value="${list.label}" escapeXml="false" />
                    </option>
                    <%
                        }
                    %>
                </c:forEach>
            </c:if>
	</select></td>
</tr>