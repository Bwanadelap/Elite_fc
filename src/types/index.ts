export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: Position;
  jerseyNumber: number;
  dateOfBirth: string;
  nationality: string;
  height: number;
  weight: number;
  email: string;
  phone: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  stats: PlayerStats;
  eligibility: PlayerEligibility;
}

export interface PlayerStats {
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  cleanSheets?: number; // For goalkeepers
  minutesPlayed: number;
}

export interface PlayerEligibility {
  isEligible: boolean;
  duesStatus: {
    isPaid: boolean;
    dueAmount: number;
    lastPaymentDate: string;
  };
  suspensionStatus: {
    isSuspended: boolean;
    reason?: string;
    endDate?: string;
  };
}

export interface TeamContract {
  id: string;
  version: string;
  effectiveDate: string;
  content: string;
  acknowledgements: {
    playerId: string;
    dateAcknowledged: string;
  }[];
}

export interface Payment {
  id: string;
  playerId: string;
  amount: number;
  date: string;
  type: 'Dues' | 'Fine' | 'Other';
  status: 'Pending' | 'Completed' | 'Failed';
  description?: string;
}
