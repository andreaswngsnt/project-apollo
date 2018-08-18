var dashboard = {
	showSwal: function(type) {
		if (type == 'basic') {
			swal({
				title: "Here's a message!",
				buttonsStyling: false,
				confirmButtonClass: "btn btn-success"
			}).catch(swal.noop)
		} else if (type == 'addCategory') {
			
			$.getJSON("/test", function(data) {
				let result = ejs.render("<tr>"+
											"<td class='text-center'>0</td>"+
											"<td>Tambah Kategori Baru</td>"+
											"<td>n/a</td>"+
											"<td class='text-right'>n/a</td>"+
											"<td class='td-actions text-right'>"+
												"<button class='btn btn-primary btn-round' onclick=dashboard.showSwal('addCategory')>"+
													"<i class='material-icons'>add</i>"+
												"</button>"+
											"</td>"+
										"</tr>"+
										"<% for(let i = 0; i < categories.length; i++) { %>"+
											"<tr>"+
												"<td class='text-center'><%= i + 1 %></td>"+
												"<td><%= categories[i].name %></td>"+
												"<td><%= categories[i].created %></td>"+
												"<td class='text-right'><%= categories[i].updated %></td>"+
											"</tr>" +
										"<% } %>", {categories: data});
				
				// for (let i = 0; i < data.length; i ++) {
					// result += "<tr>";
					// result += "<td class='text-center'>" + String(i + 1) + "</td>";
					// result += "<td>" + data[i].name + "</td>";
					// result += "<td>" + data[i].created + "</td>";
					// result += "<td  class='text-right'>" + data[i].updated + "</td>";
					// result += "</tr>";
				// }
				
				$("#categoryTable").html(result);
			});
			
			// const {value: formValues} = await swal({
				// title: 'Tambah Kategori baru',
				// html: '<div class="form-group">' +
					// '<input id="tambahKategori" type="text" class="form-control">' +
					// '</div>',
				// confirmButtonText: 'Tambah Kategori',
				// confirmButtonClass: 'btn btn-success',
				// showCancelButton: true,
				// cancelButtonText: 'Batalkan',
				// cancelButtonClass: 'btn btn-danger',
				// buttonsStyling: false,
				// preConfirm: () => {
					// return document.getElementById('tambahKategori').value
				// }
			// })
			// if (formValues) {
				// swal(json.stringify(formValues))
			// }
		}
	}
}