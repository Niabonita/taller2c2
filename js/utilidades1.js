document.addEventListener("DOMContentLoaded", function () {
    function TablitaDeNia() {
        var table = document.getElementById("tablajsxd");

        for (var i = 0; i < 4; i++) {
            var row = table.insertRow(i);

            for (var j = 0; j < 4; j++) {
                var cell = row.insertCell(j);

                if (j < 3) {
                    if (i === 0 && j === 0) {
                        

                        cell.rowSpan = 3;
                    } else if (i === 3 && j === 1) {
                        

                        cell.colSpan = 2;
                    } if (i === 1 && j === 0) {
                        var h1 = document.createElement("h1");
                        h1.innerHTML = 'Sample Web Page Table Layout';
                        cell.appendChild(h1);
                        cell.colSpan = 2;

                    } if (i === 2 && j === 0) {
                        var enlace = document.createElement("a");
                        enlace.href = "https://img.freepik.com/vector-premium/lindas-mujeres-oficina-trabajan-duro-e-inconscientes-piso-ilustracion-arte-dibujos-animados-vector-premium_56104-129.jpg?size=626&ext=jpg";
                        enlace.textContent = "HOME   |   DOWNLOAD   |   SITE INDEX   |   SEARCH   |   CONTACT US";
                        enlace.style.color = "white"; 
                        cell.appendChild(enlace);
                        cell.colSpan = 3;
                        row.style.backgroundColor = "#665f94";

                    }
                    
                }
            }
        }
        var FoneCone = table.rows[0].cells[0];
        var img1 = document.createElement("img");
        img1.src = "https://img.freepik.com/vector-premium/hand-drawn-tree-kawaii-coloring-page-illustration_939830-2842.jpg";
        img1.alt = "árbol, xd";
        FoneCone.appendChild(img1);

        var FfourCfour = table.rows[3].cells[0];
        var img2 = document.createElement("img");
        img2.src = "https://img.freepik.com/vector-gratis/tatuajes-marineros-dibujados-mano_23-2147561144.jpg?w=740&t=st=1697789085~exp=1697789685~hmac=ceda0f3adcf0534a4f0d67b353c9163355a3169a22ce2a117544141e4db49bda";
        img2.alt = "titanic";
        FfourCfour.appendChild(img2);

        var FoneCtwo = table.rows[0].cells[1];
        var img3 = document.createElement("img");
        img3.src = "../recursos/img/daves.jpg";
        img3.alt = "daves";
        FoneCtwo.appendChild(img3);

        var FfourCfour = table.rows[3].cells[2];
        var img4 = document.createElement("img");
        img4.src = "https://img.freepik.com/vector-gratis/hago-texto-tipografia-doodle-fuente_53876-99670.jpg?w=740&t=st=1697789861~exp=1697790461~hmac=5d67156a169a9bd0438faef257c1078da01d9255f85b5b0af2d4c4d4b87f9386";
        img4.alt = "iDo,xd";
        FfourCfour.appendChild(img4);

        var FfourCtwothree = table.rows[3].cells[1];
        FfourCtwothree.textContent = 'This is just a corny way of showing you how a table can organize the layout of a web page. Designing a prototype by sketching on a piece of paper is a good place to start You need to, however, have the skills to transfer that concept to HTML Tables help you organize it.';
        

        var FoneCthree = table.rows[0].cells[2];
        FoneCthree.textContent = 'Thursday, October 11, 2001';
        FoneCthree.style.fontWeight = 'bold';


        var Ftwo = table.rows[0];


        var Cfour = Ftwo.insertCell(3);
        var enlace = document.createElement('a');
        enlace.href = 'https://img.freepik.com/vector-premium/oficina-mujeres-trabajando-ocupado-ilustracion-arte-dibujos-animados-linda-chica-oficina_56104-96.jpg?w=740';
        enlace.textContent = 'text only';
        Cfour.appendChild(enlace);

        


        var Ftwo = table.rows[1];
        
        Ftwo.deleteCell(3);

        var Ftwo = table.rows[2];

        Ftwo.deleteCell(3); 

        var Ftwo = table.rows[3]; 

        Ftwo.deleteCell(3); 

        var Ftwo = table.rows[2]; 

        Ftwo.deleteCell(2); 

        var Ftwo = table.rows[2]; 

        Ftwo.deleteCell(1); 

        var Ftwo = table.rows[1]; 

        Ftwo.deleteCell(2); 

        var Ftwo = table.rows[0]; 

        Ftwo.deleteCell(4);
    }
    TablitaDeNia();
});