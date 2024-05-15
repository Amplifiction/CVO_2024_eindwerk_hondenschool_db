<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RegistrationNoti extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Welkom bij hondenschool De Roedel!')
                    ->line('Je bent succesvol bij ons geregistreerd, '.$this->user['first_name'].'.')
                    ->line('Je kan je voortaan aanmelden met je mailadres '.$this->user['email'].' en het door jou gekozen wachtwoord.')
                    ->line('Wij wensen je veel plezier met je viervoeter(s).')
                    // ->action('Notification Action', url('/'))
                    // ->line('Thank you for using our application!')
                    ->line('(Do not reply: mails gericht aan deze mailbox worden niet gelezen.')
                    ->salutation('Tot in de wei, of de kantine!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
