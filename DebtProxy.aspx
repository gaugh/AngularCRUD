<%@ Page Language="C#" AutoEventWireup="True" MasterPageFile="~/DFPS/templates/DFPSEntryMasterPage.master" StylesheetTheme="NMM" CodeBehind="DebtProxy.aspx.cs" Inherits="OnlineAnalysisSetup.DebtProxy" %>



<%@ MasterType VirtualPath="~/DFPS/templates/DFPSEntryMasterPage.master" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    
    <div id="content">
        <h4 class="pageTitle">Welcome to Our Online Setup Process</h4>
		<div class="clear"></div>  <!-- DO NOT DELETE -->   
        <p>Welcome to the next step in the path to eliminating 
        your debt and changing your financial future along with the quality of life you will 
        enjoy with a debt free retirement.&nbsp;You have already made one of the most important decisions 
        for your future, which was to enroll in your own Debt Elimination Plan.</p>
        
        <p>The next step is to type in or copy and paste in your 
        personal "Identifier Code" that you were given after signing up for your plan.&nbsp;
        Then you will be able to create a username and password for your account.</p>

        <br />
        <asp:Panel ID="Panel2" runat="server" DefaultButton="btnActivate">
        
        <asp:Label ID="lblEnterCode" Font-Bold="true" runat="server" Text="Enter Identifier Code" /><br />
        <asp:TextBox ID="txtEnterCode" runat="server" ToolTip='Enter your Identifier Code here.  It should be in the format "X00000X00000".' />
        <asp:Button ID="btnActivate" runat="server" Text="Activate" 
            ToolTip="Click here to go to the next page and continue your Debt Elimination Process." 
            onclick="btnActivate_Click" />
        <br /><asp:Label ID="lblCodeError" runat="server" Text="Enter Code"></asp:Label>
        </asp:Panel>
        
        <br />
        
        <br />

        <asp:Label ID="lblLogin" Font-Bold="true" runat="server" Text="If you are a returning User Please Login: " />
        
        <asp:Panel ID="Panel1" runat="server" DefaultButton="Login1$LoginButton">
            <asp:Login ID="Login1" DisplayRememberMe="False" 
                FailureText="Please provide a valid username and password" TitleText="" 
                runat="server" OnAuthenticate="Login1_Authenticate" 
                DestinationPageUrl="Client.aspx" TextLayout="TextOnTop" Width="274px" 
                BackColor="#E3EAEB" BorderColor="#E6E2D8" BorderPadding="4" BorderStyle="Solid" 
                BorderWidth="1px" Font-Names="Verdana" ForeColor="#333333">
            <TextBoxStyle Width="190px" />
            <LoginButtonStyle BackColor="White" BorderColor="#C5BBAF" BorderStyle="Solid" 
                BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#1C5E55" />
            <InstructionTextStyle Font-Italic="True" ForeColor="Black" />
            <TitleTextStyle BackColor="#1C5E55" Font-Bold="True" Font-Size="0.9em" 
                ForeColor="White" />
        </asp:Login>        
                    <a href="ForgotPassword.aspx" >Forgot Password?</a></p>
        </asp:Panel>
        
        
        
        
    </div>


</asp:Content>