export enum gridStatus {
    idle = 'idle',
    pending = 'pending',
    failed = 'failed'
  }
  
export interface Grid {
  id: number
  operation: string
  scope: string
  timestamp: string
  status: string
}


/**
 * Grid state
 * @typedef GridState
 * @type {object}
 * @property {grids} grids -  grids retrieved from server
 * @property {gridStatus} status - status of sync 
 * @property {string} error - error message
 */
export interface GridState {
  loading: boolean
  grids: [Grid] 
  status: gridStatus
  error: string | null | undefined
}
