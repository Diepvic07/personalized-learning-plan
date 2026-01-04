/**
 * SCREEN 06: COMMITMENT FLOW
 * Three sequential commitment modals
 */

let currentCommitmentStep = 0;

function renderCommitment() {
  const userData = Storage.getUserData();
  const commitmentProgress = userData.commitmentAccepted || [];
  currentCommitmentStep = commitmentProgress.length;

  if (currentCommitmentStep >= 3) {
    // All commitments accepted, go to first lesson
    navigateTo('screen-07');
    return;
  }

  showCommitmentModal(currentCommitmentStep);
}

function showCommitmentModal(step) {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const content = translations.commitment;

  const modals = [
    { key: 'modal1', icon: '⏱️' },
    { key: 'modal2', icon: '📅' },
    { key: 'modal3', icon: '💪' }
  ];

  const modal = modals[step];
  const modalContent = content[modal.key];

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-900/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center animate-scale-in">
        <div class="mb-6 text-6xl">${modal.icon}</div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          ${Utils.t(modalContent.title, lang)}
        </h2>
        <p class="text-gray-600 mb-8 text-lg">
          ${Utils.t(modal.key === 'modal3' ? modalContent.quote : modalContent.message, lang)}
        </p>
        <button 
          onclick="acceptCommitment()" 
          class="w-full bg-primary text-white rounded-xl py-4 px-6 text-lg font-bold hover:scale-105 transition-transform shadow-lg">
          ${Utils.t(modalContent.button, lang)}
        </button>
      </div>
    </div>
  `;
}

window.acceptCommitment = function () {
  const userData = Storage.getUserData();
  const commitmentProgress = userData.commitmentAccepted || [];

  // Mark current step as accepted
  commitmentProgress.push(true);
  Storage.updateUserData({ commitmentAccepted: commitmentProgress });

  // Move to next step
  currentCommitmentStep++;

  if (currentCommitmentStep >= 3) {
    // All commitments accepted
    navigateTo('screen-07');
  } else {
    // Show next modal
    showCommitmentModal(currentCommitmentStep);
  }
};
