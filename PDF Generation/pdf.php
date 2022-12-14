<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    require('fpdf/fpdf.php');
    $email=$_POST['email'];
    $first=$_POST['first_name'];
    $last=$_POST['last_name'];
    $gender=$_POST['gender'];
    $phone=$_POST['phone'];
    $birthday=$_POST['birthday'];
    $qual = $_POST['Qualification'];
    $pdf=new FPDF();
    $pdf->Addpage();
    $pdf->SetFont("Arial","", 12);
    $pdf->Cell(0,10,"Employee Details",0,1,"C");
    $pdf->Cell(45,10,"First Name:", 0, 0,"R");
    $pdf->Cell(45,10,$first,0,1,"L");
    $pdf->Cell(45,10,"Last Name:",0,0,"R");
    $pdf->Cell(45,10,$last,0,1,"L");
    $pdf->Cell(45,10,"Gender:",0,0,"R");
    $pdf->Cell(45,10,$gender,0,1,"L");
    $pdf->Cell(45,10,"Birthday:",0,0,"R");
    $pdf->Cell(45,10,$birthday,0,1,"L");
    $pdf->Cell(45,10,"Mobile no. :",0,0,"R");
    $pdf->Cell(45,10,$phone,0,1,"L");
    $pdf->Cell(45,10,"Email : ", 0,0,'R');
    $pdf->Cell(45,10,$email,0,1,"L");
    $pdf->Cell(45,10,"Qualification : ",0,0,"R");
    $pdf->Cell(45,10,$qual,0,1,"l");
    $pdf->output();
}
?>