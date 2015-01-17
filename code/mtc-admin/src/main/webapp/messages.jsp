<%-- Error Messages --%>

<c:if test="${not empty errors or not empty message}">
	<div class="alert alert-info">
		<button type="button" class="close" data-dismiss="alert">×</button>
		<!-- <strong>Just a quick note:</strong> Hope you like the theme! -->
		<c:if test="${not empty errors}">
			<c:forEach var="error" items="${errors}">
				<c:out value="${error}" />
				<br />
			</c:forEach>
			<c:remove var="errors" scope="session" />
		</c:if>

		<%-- Success Messages --%>
		<c:if test="${not empty message}">
			<%-- <c:forEach var="msg" items="${message}">
				<c:out value="${msg}" />
				<br />
			</c:forEach> --%>
			${message}
			<c:remove var="message" scope="session" />
		</c:if>
	</div>
</c:if>




