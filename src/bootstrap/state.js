// Stub for bootstrap/state.js
// This is a minimal implementation to allow the application to run

let currentState = {
  sessionId: null,
  userId: null,
  orgId: null,
  // Add other state properties as needed
};

export function getState() {
  return currentState;
}

export function setState(newState) {
  currentState = { ...currentState, ...newState };
}

export function getSessionId() {
  return currentState.sessionId || 'default-session-id';
}

export function setSessionId(id) {
  currentState.sessionId = id;
}

export function getUserId() {
  return currentState.userId || 'default-user-id';
}

export function getOrgId() {
  return currentState.orgId || 'default-org-id';
}

// Export default as well
export default {
  getState,
  setState,
  getSessionId,
  setSessionId,
  getUserId,
  getOrgId
};