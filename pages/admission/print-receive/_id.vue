<template>
    <div>
        <div id="html">
            <div style="width: 100%">

                <!--EXIM Copy-->
                <div style="width: 33%;border-right: 1px dotted #000;float: left;">

                    <table class="b-none">
                        <tr>
                            <td colspan="2" class="bb-none br-none" style="padding-left: 13px">Receipt No.
                                
                            </td>
                            <td class="tr w-40 bb-none">Copy of Accounts</td>
                        </tr>

                        <tr>
                            <th class='f-12 bt-none' colspan="3">

                                Export Import Bank of Bangladesh Limited

                            </th>
                        </tr>
                    </table>               

                        

                </div>

                <!--DIU Copy by Student-->
                <div style="width: 33%;border-right: 1px dotted #000;float: left;">
                <table class="b-none">
                        <tr>
                            <td colspan="2" class="bb-none br-none" style="padding-left: 13px">Receipt No.
                                
                            </td>
                            <td class="tr w-40 bb-none">Copy of Accounts</td>
                        </tr>

                        <tr>
                            <th class='f-12 bt-none' colspan="3">

                                Export Import Bank of Bangladesh Limited

                            </th>
                        </tr>
                    </table>   

                    
                </div>

                <!--Student Copy-->
                <div style="width: 33%;float: left;margin-left: 5px">
                <table class="b-none">
                        <tr>
                            <td colspan="2" class="bb-none br-none" style="padding-left: 13px">Receipt No.
                                
                            </td>
                            <td class="tr w-40 bb-none">Copy of Accounts</td>
                        </tr>

                        <tr>
                            <th class='f-12 bt-none' colspan="3">

                                Export Import Bank of Bangladesh Limited

                            </th>
                        </tr>
                    </table>   

                    
                </div>

            </div>



          


        </div>
        <button @click="download()" class="example">Download</button>
    </div>
</template>
<script>
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export default {

    layout: 'Adm-content',
    methods: {
        download() {
            window.html2canvas = html2canvas;
            var doc = new jsPDF('p', 'pt', 'a4');
            doc.html(document.querySelector("#html"), {
                callback: function (pdf) {
                    pdf.save("print.pdf");
                }
            })

        }
    }

}
</script>
<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
}

table,
td,
th {
    border: 1px solid #000;
    font-size: 9px !important;
    padding: 1px 5px;
}

.b-none {
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
}

.bt-none {
    border-top: 2px solid #fff;
}

.bb-none {
    border-bottom: 2px solid #fff;
}

.br-none {
    border-right: 2px solid #fff;
}

.bl-none {
    border-left: 2px solid #fff;
}

.tc {
    text-align: center;
}

.tr {
    text-align: right;
}

/*width*/
.w-1 {
    width: 1%;
}

.w-10 {
    width: 10%;
}

.w-15 {
    width: 15%;
}

.w-40 {
    width: 40%;
}

/*margin*/
.mt-1 {
    margin-top: 2px;
}

.mt-5 {
    margin-top: 5px;
}

.mt-8 {
    margin-top: 16px;
}

.mt-15 {
    margin-top: 30px;
}

.f-12 {
    font-size: 12px !important;
}

.f-19 {
    font-size: 14px !important;
}

/*padding*/
.p-0 {
    padding: 0 !important;
}

/*new*/
.bank_one {
    position: absolute;
    top: 15%;
    left: 11%;
    transform: translate(50%, -50%);
}

.bank_two {
    position: absolute;
    top: 15%;
    left: 41%;
    transform: translate(50%, -50%);
}

.bank_three {
    position: absolute;
    top: 15%;
    left: 71%;
    transform: translate(50%, -50%);
}

.bank_section_one {
    position: absolute;
    top: 52%;
    left: 11%;
    transform: translate(50%, -50%);
}

.bank_section_two {
    position: absolute;
    top: 52%;
    left: 41%;
    transform: translate(50%, -50%);
}

.bank_section_three {
    position: absolute;
    top: 52%;
    left: 71%;
    transform: translate(50%, -50%);
}

.diu_one {
    position: absolute;
    top: 30%;
    left: 12%;
    transform: translate(50%, -50%);
}

.diu_two {
    position: absolute;
    top: 30%;
    left: 42%;
    transform: translate(50%, -50%);
}

.diu_three {
    position: absolute;
    top: 30%;
    left: 72%;
    transform: translate(50%, -50%);
}

.diu_section_one {
    position: absolute;
    top: 68%;
    left: 12%;
    transform: translate(50%, -50%);
}

.diu_section_two {
    position: absolute;
    top: 68%;
    left: 42%;
    transform: translate(50%, -50%);
}

.diu_section_three {
    position: absolute;
    top: 68%;
    left: 72%;
    transform: translate(50%, -50%);
}
</style>