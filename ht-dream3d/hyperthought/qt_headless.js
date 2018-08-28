// Emacs mode hint: -*- mode: JavaScript -*-

function Controller() {
  installer.autoRejectMessageBoxes();
  installer.installationFinished.connect(function() {
      gui.clickButton(buttons.NextButton);
  })
}

Controller.prototype.WelcomePageCallback = function() {
  gui.clickButton(buttons.NextButton, 3000);
}

Controller.prototype.CredentialsPageCallback = function() {
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.IntroductionPageCallback = function() {
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.TargetDirectoryPageCallback = function()
{
  gui.currentPageWidget().TargetDirectoryLineEdit.setText("/opt/DREAM3D_SDK/Qt5.10.1");
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.ComponentSelectionPageCallback = function() {
  var widget = gui.currentPageWidget();
  // This is for Qt5 installation
  widget.deselectAll();
  widget.selectComponent("qt.qt5.5101.gcc_64");

  gui.clickButton(buttons.NextButton);
}

Controller.prototype.LicenseAgreementPageCallback = function() {
  gui.currentPageWidget().AcceptLicenseRadioButton.setChecked(true);
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.StartMenuDirectoryPageCallback = function() {
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.ReadyForInstallationPageCallback = function()
{
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.FinishedPageCallback = function() {
var checkBoxForm = gui.currentPageWidget().LaunchQtCreatorCheckBoxForm
if (checkBoxForm && checkBoxForm.launchQtCreatorCheckBox) {
  checkBoxForm.launchQtCreatorCheckBox.checked = false;
}
  gui.clickButton(buttons.FinishButton);
}